import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator'

const Materials=[MatButtonModule,MatIconModule,MatTableModule,MatDialogModule,MatInputModule,MatPaginatorModule];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    Materials
  ]
})
export class MaterialModuleModule { }
