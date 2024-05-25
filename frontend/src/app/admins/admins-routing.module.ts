// admins-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsComponent } from './admins/admins.component';
import { AddFormComponent } from './add-form/add-form.component';

const routes: Routes = [
  { path: '', component: AdminsComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'edit/:id', component: AddFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }
