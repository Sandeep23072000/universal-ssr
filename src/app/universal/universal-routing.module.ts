import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversalComponent } from './universal.component';

const routes: Routes = [
  { path: '', component: HomeComponent},

  { path: 'login', component: LoginComponent},

  {path: 'productdetails/:id', component: DetailsComponent},
  {path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UniversalRoutingModule { }
