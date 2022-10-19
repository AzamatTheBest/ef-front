import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './component/course/course.component';
import { ExcellentComponent } from './component/excellent/excellent.component';
import { FoundationDetailsComponent } from './component/foundation-details/foundation-details.component';
import { HomeComponent } from './component/home/home.component';
import { ListFoundComponent } from './component/list-found/list-found.component';
import { ListComponent } from './component/list/list.component';
import { LoginComponent } from './component/login/login.component';
import { RegstraionComponent } from './component/regstraion/regstraion.component';
import { UniversityDetailsComponent } from './component/university-details/university-details.component';
import { UniversityComponent } from './component/university/university.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegstraionComponent},
  {path: 'univs', component: ListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'univ/:id', component: UniversityDetailsComponent},
  {path: 'found/:id', component: FoundationDetailsComponent},
  {path: 'foundations', component: ListFoundComponent},
  {path: 'course/:id', component: CourseComponent},
  {path: 'excellent', component: ExcellentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }