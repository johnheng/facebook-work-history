import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FacebookModule } from 'ng2-facebook-sdk';
import { CurrentPipe } from './pipes/current.pipe';
import { WorkYearPipe } from './pipes/work-year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrentPipe,
    WorkYearPipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
