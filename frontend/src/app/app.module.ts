
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingModule } from './landing/landing.module'; //module


import { NavbarComponent } from './navbar/navbar.component';//component
import { AboutMeComponent } from './components/about-me/about-me.component';//component

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { PaintingService } from '../app/shared/services/painting.service'; //services
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { PaintingModule } from './painting/painting.module';

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
    HttpClientModule,
  ],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    // PaintingService //services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
