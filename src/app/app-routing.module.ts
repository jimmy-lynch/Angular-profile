import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { FieldHockeyComponent } from './field-hockey/field-hockey.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'education', component: EducationComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'work', component: WorkComponent},
  {path: 'field-hockey', component: FieldHockeyComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EducationComponent, HobbiesComponent, WorkComponent, FieldHockeyComponent, PageNotFoundComponent];
