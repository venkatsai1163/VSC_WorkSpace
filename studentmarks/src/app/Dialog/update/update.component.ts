import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarksdataComponent } from 'src/app/marksdata/marksdata.component';
import { MarkserviceService } from 'src/app/markservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<UpdateComponent>,private service:MarkserviceService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    createform:FormGroup=this.fb.group({
      name:[this.data.name,[Validators.required,Validators.pattern('[A-Za-z ]*'),Validators.maxLength(25),Validators.minLength(3)]],
      id:[this.data.id],
      mark1:[this.data.mark1,[Validators.required,Validators.min(0),Validators.max(100)]],
      mark2:[this.data.mark2,[Validators.required,Validators.min(0),Validators.max(100)]],
      mark3:[this.data.mark3,[Validators.required,Validators.min(0),Validators.max(100)]],
      total:[0],
      grade:['']
    });

  ngOnInit(): void {
  }

  close()
  {
    this.dialogRef.close("closed");
  }

  update()
  {
    console.log(this.createform);
    if(this.createform.valid){
    console.log(this.createform.value);
    this.service.updateStudentMarkData(this.createform.value).subscribe(
      data=>{
        console.log(data)
        this.dialogRef.close("updated");
      }
    );
  }
  }
}
