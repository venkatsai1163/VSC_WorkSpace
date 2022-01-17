import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarksdataComponent } from 'src/app/marksdata/marksdata.component';
import { MarkserviceService } from 'src/app/markservice.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:MarkserviceService
  ) { }

  ngOnInit(): void {
      
  }

  cancle(){
    this.dialogRef.close("cancle");
  }

  delete(){
    console.log(this.data.id);
    this.service.deleteStudentMarkDataById(this.data.id).subscribe(
      res=>{
        console.log(res);
        this.dialogRef.close("deleted");
      }
    )
  }

}
