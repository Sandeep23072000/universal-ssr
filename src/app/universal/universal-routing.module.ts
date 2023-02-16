import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversalComponent } from './universal.component';

const routes: Routes = [
  { path: '', component: HomeComponent,data: {title:"Angular Universal home page is here for use the SEO",discription:
  "Angular Universal executes on the server, generating static application pages that later get bootstrapped on the client. This means that the application generally renders more quickly, giving users a chance to view the application layout before it becomes fully interactive",ogTitle: 'Description of Home Component for social media',}},

  { path: 'login', component: LoginComponent,data: {title:"Angular Universal login page is here for use the SEO",discription:"get the login page here  for showing data",ogTitle: 'Description of Login Component for social media',}},

  {path: 'details', component: DetailsComponent,data: {title:"Angular Universal details page is here for use the SEO",discription:"get the details page here  for showing data",ogTitle: 'Description of Login Component for social media',}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
