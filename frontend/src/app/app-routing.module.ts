import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ShopComponent } from './shop/shop/shop.component';


const routes: Routes = [
  {path:'' , loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'about-me', component: AboutMeComponent },
  {path :'shop',component:ShopComponent},
  { path: 'admin', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
