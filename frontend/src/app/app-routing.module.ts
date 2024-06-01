import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ShopComponent } from './shop/shop/shop.component';
import { PaintingComponent } from './painting/painting/painting.component';
import { PaintingDetailComponent } from './painting/painting-detail/painting-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {path:'' , loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'about-me', component: AboutMeComponent },
  {path :'shop',component:ShopComponent},
  { path: 'login', component:LoginComponent },
  { path: 'signup', component:SignupComponent },
  { path: 'paintings', component: PaintingComponent },
  { path: 'admin', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule),canActivate: [AdminGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },

  // { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
