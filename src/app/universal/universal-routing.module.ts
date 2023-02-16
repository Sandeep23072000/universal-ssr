import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversalComponent } from './universal.component';

const routes: Routes = [
  { path: '', component: HomeComponent,data: {title:"home page is here",discription:"get the home page here  for showing data",ogTitle: 'Description of Home Component for social media',}},

  { path: 'login', component: LoginComponent,data: {title:"login page is here",discription:"get the login page here  for showing data",ogTitle: 'Description of Login Component for social media',}},

  {path: 'details', component: DetailsComponent,data: {title:"details page is here",discription:"get the details page here  for showing data",ogTitle: 'Description of Login Component for social media',}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
