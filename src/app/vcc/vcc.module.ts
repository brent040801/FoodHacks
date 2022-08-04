import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VccPageRoutingModule } from './vcc-routing.module';

import { VccPage } from './vcc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VccPageRoutingModule
  ],
  declarations: [VccPage]
})
export class VccPageModule {}
