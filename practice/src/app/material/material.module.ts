import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

const materials=[MatButtonModule,MatInputModule,MatIconModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    materials
  ]
})
export class MaterialModule { }
