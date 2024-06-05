
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module'; //module


import { NavbarComponent } from './navbar/navbar.component';//component
import { AboutMeComponent } from './components/about-me/about-me.component';//component

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { PaintingModule } from './painting/painting.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ShopModule } from './shop/shop.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

//loader stuff
import { LoaderComponent } from './loader/loader.component';
import { LoaderInterceptor } from './loader.interceptor';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EditUserComponent } from './auth/edit-user/edit-user.component';


 //carousel library

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    AboutMeComponent, 
    FooterComponent, 
    LoginComponent,
    SignupComponent,
    LoaderComponent,
    ContactMeComponent,
    EditUserComponent,  
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule, //module
    HttpClientModule, 
    FontAwesomeModule,
    ShopModule,
    PaintingModule,

    ReactiveFormsModule,
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
   { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
   

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
