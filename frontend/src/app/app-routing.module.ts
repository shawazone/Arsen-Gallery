import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './components/about-me/about-me.component';
import { ShopComponent } from './shop/shop/shop.component';
import { PaintingComponent } from './painting/painting/painting.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { ShopGuard } from './guards/shop.guard';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path:'' , loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)},
  { path: 'about-me', component: AboutMeComponent },
  {path :'shop',component:ShopComponent,canActivate: [ShopGuard]},
  {path :'contact-me', component: ContactMeComponent},
  { path: 'login', component:LoginComponent,canActivate: [AuthGuard] },
  { path: 'signup', component:SignupComponent,canActivate: [AuthGuard] },
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
