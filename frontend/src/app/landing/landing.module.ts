import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

// import { SharedModule } from '../shared/shared.module';

import { PaintingService } from '../painting.service';

import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    CarouselModule.forRoot(),

  ],
  // providers: [PaintingService]
})
export class LandingModule { }



