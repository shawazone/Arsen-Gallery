import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingComponent } from './painting/painting.component';





@NgModule({
  declarations: [
    PaintingComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [PaintingComponent], 


})
export class PaintingModule { }
