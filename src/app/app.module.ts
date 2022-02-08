import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentRegComponent } from './student_registration/student-reg/student-reg.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentViewComponent } from './student-view/student-view.component';
import { SortDirective } from './directive/sort.directive';


@NgModule({
  declarations: [
    AppComponent,
    StudentRegComponent,
    StudentViewComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
