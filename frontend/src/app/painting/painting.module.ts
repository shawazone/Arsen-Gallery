import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';
import { PaintingDetailComponent } from './painting-detail/painting-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { PaintingRoutingModule } from './painting-routes.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PaintingComponent,
    PaintingDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PaintingRoutingModule,
    FormsModule,
   

  ],
  exports: [PaintingComponent], 


})
export class PaintingModule { }
