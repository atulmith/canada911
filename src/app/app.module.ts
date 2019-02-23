import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  MatInputModule,
MatButtonModule,
MatCardModule,
MatIconModule,
MatSelectModule,
MatListModule,
MatMenuModule,
MatDatepickerModule,
MatCheckboxModule
 } from "@angular/material";

 import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
