import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarksdataComponent } from './marksdata/marksdata.component';
import { MarkserviceService } from './markservice.service';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { UpdateComponent } from './Dialog/update/update.component';
import { ConfirmComponent } from './Dialog/confirm/confirm.component';
import { CreateComponent } from './Dialog/create/create.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MarksdataComponent,
    UpdateComponent,
    ConfirmComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MarkserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
