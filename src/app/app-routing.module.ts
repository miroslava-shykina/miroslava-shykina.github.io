import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './works/cenzor/cenzor.component';
import { UserslistComponent } from './works/userslist/userslist.component';
import { TasklistComponent } from './works/tasklist/tasklist.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'works/cenzor', component: CenzorComponent},
  {path: 'works/userslist', component: UserslistComponent},
  {path: 'works/tasklist', component: TasklistComponent},
  {path:'', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
