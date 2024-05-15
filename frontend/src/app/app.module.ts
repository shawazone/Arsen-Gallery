
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module'; //module


import { NavbarComponent } from './navbar/navbar.component';//component
import { AboutMeComponent } from './about-me/about-me.component';//component

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



 //carousel library

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    AboutMeComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule, //module


  
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
