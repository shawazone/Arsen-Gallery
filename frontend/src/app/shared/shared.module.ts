// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintingService } from '../painting.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers: [PaintingService],
  exports: []
})
export class SharedModule { }
