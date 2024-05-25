import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';


import { AdminsComponent } from './admins/admins/admins.component';
import { AddFormComponent } from './admins/add-form/add-form.component';

const routes: Routes = [
  {path:'' , loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'about-me', component: AboutMeComponent },
  { path: 'admin', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', redirectTo: '/admin' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
