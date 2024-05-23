import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminsComponent } from './admins/admins.component';
import { PaintingModule } from '../painting/painting.module';
import { AdminsRoutingModule } from './admins-routing.module';
import { AddFormComponent } from './add-form/add-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminsComponent,
    AddFormComponent,
  ],
  imports: [
    CommonModule,
    PaintingModule,
    AdminsRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    AdminsComponent,
    AddFormComponent,
  ]
})
export class AdminsModule { }
