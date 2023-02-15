import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversalRoutingModule } from './universal-routing.module';
import { UniversalComponent } from './universal.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    UniversalComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    UniversalRoutingModule
  ]
})
export class UniversalModule { }
