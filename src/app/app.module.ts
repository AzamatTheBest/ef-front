import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UniversityComponent } from './component/university/university.component';
import { RegstraionComponent } from './component/regstraion/regstraion.component';
import { ListComponent } from './component/list/list.component';
import { GlobalErrorComponent } from './component/global-error/global-error.component';;
import { FilterUnivPipe } from './pipe/filter-univ.pipe';
import { FoundationComponent } from './component/foundation/foundation.component';
import { ListFoundComponent } from './component/list-found/list-found.component';
import { FilterFoundPipe } from './pipe/filter-found.pipe';
import { UniversityDetailsComponent } from './component/university-details/university-details.component';
import { FoundationDetailsComponent } from './component/foundation-details/foundation-details.component';
import { CourseComponent } from './component/course/course.component';
import { ExcellentComponent } from './component/excellent/excellent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegstraionComponent,
    HomeComponent,
    NavComponent,
    UniversityComponent,
    ListComponent,
    GlobalErrorComponent,
    FilterUnivPipe,
    FoundationComponent,
    ListFoundComponent,
    FilterFoundPipe,
    UniversityDetailsComponent,
    FoundationDetailsComponent,
    CourseComponent,
    ExcellentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
