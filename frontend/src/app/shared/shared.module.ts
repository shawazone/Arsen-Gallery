// shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,

    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,



  ],
  // providers: [PaintingService],
  exports: []
})
export class SharedModule { }
