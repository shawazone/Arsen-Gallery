import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';



import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '../shared/shared.module';
import { PaintingModule } from '../painting/painting.module';





@NgModule({
  declarations: [
    LandingPageComponent,
   
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    PaintingModule,
    CarouselModule.forRoot(),
    SharedModule,


  ],

})
export class LandingModule { 
  constructor() {
    console.log('Landing Module Loaded');
  }


}



