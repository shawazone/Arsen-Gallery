import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { PaintingModule } from '../painting/painting.module';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PaintingModule,
    BrowserModule,
  ],
  exports:[
    ShopComponent,
  ],

})
export class ShopModule { }
