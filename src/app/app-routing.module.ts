import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./universal/universal.module').then(m => m.UniversalModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking', useHash: true
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
