import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreadPageRoutingModule } from './bread-routing.module';

import { BreadPage } from './bread.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreadPageRoutingModule
  ],
  declarations: [BreadPage]
})
export class BreadPageModule {}
