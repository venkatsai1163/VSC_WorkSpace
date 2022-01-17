import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MarkserviceService } from 'src/app/markservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private fb:FormBuilder,public dialogRef: MatDialogRef<CreateComponent>,private service:MarkserviceService) { }

  createform:FormGroup=this.fb.group({
    name:[,[Validators.required,Validators.pattern('[A-Za-z ]*'),Validators.maxLength(25),Validators.minLength(3)]],
    id:[,[Validators.required,,Validators.min(1)]],
    mark1:[,[Validators.required,Validators.min(0),Validators.max(100)]],
    mark2:[,[Validators.required,Validators.min(0),Validators.max(100)]],
    mark3:[,[Validators.required,Validators.min(0),Validators.max(100)]],
    total:[0],
    grade:['']
  });

  ngOnInit(): void {
  }

  create()
  {

    console.log(this.createform);
    if(this.createform.valid){
    console.log(this.createform.value);
    this.service.createStudentMarkData(this.createform.value).subscribe(
      data=>{
        console.log(data)
        this.dialogRef.close("created");
      },err=>{
        console.log(err);

        //to instilize servererror to errors in createform id
        let temp= <FormGroup>this.createform.controls['id'];
        temp.setErrors({
          serverError: true
        });
      }
    )
  }
}

  close()
  {
    this.dialogRef.close("closed");
  }
}
