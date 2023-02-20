import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversalComponent } from './universal.component';

const routes: Routes = [
  { path: '', component: HomeComponent,data: {title:"List of Products",discription:
  "Here,We discribe about the products list",ogTitle: 'Description of Home Component for social media',}},

  { path: 'login', component: LoginComponent,data: {title:"Login page is here for use the user information",discription:"get the login page here  for showing data",ogTitle: 'Description of Login Component for social media',}},

  {path: 'details/:id', component: DetailsComponent,data: {title:"Details of selected products",discription:"get the details page here  for showing data about the product details",ogTitle: 'Description of Details Component for social media',}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
