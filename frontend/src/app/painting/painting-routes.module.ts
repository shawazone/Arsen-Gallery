import { PaintingDetailComponent } from './painting-detail/painting-detail.component';
// admins-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingComponent } from './painting/painting.component';


const routes: Routes = [
    { path: 'paintings', component: PaintingComponent },
    { path: 'paintings/:id', component: PaintingDetailComponent } 
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingRoutingModule { }
