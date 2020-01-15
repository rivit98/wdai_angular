import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { RatingModule } from 'ng-starrating';
import { ToastrModule } from 'ngx-toastr';
import { MockDataComponent } from './mock-data/mock-data.component';
import { CourseAddFormComponent } from './course-add-form/course-add-form.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CourseFilterComponent } from './course-filter/course-filter.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EctsPipe } from './pipes/ects-pipe'
import { SemesterPipe } from './pipes/semester-pipe'
import { RatePipe } from './pipes/rate-pipe'
import { SearchTextPipe } from './pipes/search-text-pipe'

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    NavbarComponent,
    CourseComponent,
    MockDataComponent,
    CourseAddFormComponent,
    CourseFilterComponent,
    EctsPipe,
    SemesterPipe,
    RatePipe,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot(),
    RatingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
