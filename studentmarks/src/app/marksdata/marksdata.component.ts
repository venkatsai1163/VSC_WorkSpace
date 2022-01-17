import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmComponent } from '../Dialog/confirm/confirm.component';
import { CreateComponent } from '../Dialog/create/create.component';
import { UpdateComponent } from '../Dialog/update/update.component';
import { MarkserviceService } from '../markservice.service';

@Component({
  selector: 'app-marksdata',
  templateUrl: './marksdata.component.html',
  styleUrls: ['./marksdata.component.scss']
})
export class MarksdataComponent implements OnInit {
  [x: string]: any;

  constructor(private service:MarkserviceService,private dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'name', 'mark1', 'mark2','mark3','total','grade','update','delete'];
  dataSource:any;

  @ViewChild(MatPaginator) paginator: any;

  ngOnInit(): void {

    this.service.getStudentsMarkData().subscribe(data=>{
      console.log(data);
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

  }

  addDialog(){

      const dialogRef = this.dialog.open(CreateComponent, {
        width: '35%',
        disableClose: true 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result=="created")
        {
          this.ngOnInit()
        }
      });
  }

  updateDialog(req:any)
  {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '35%',
      disableClose: true,
      data:req
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result=="updated")
      {
        this.ngOnInit()
      }
    });
  }

  deleteDialog(req:any)
  {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '35%',
      disableClose: true,
     data:req
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result=="deleted")
      {
        this.ngOnInit();
      }
    });
    
  }
}
