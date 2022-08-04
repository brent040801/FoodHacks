import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VvfPageRoutingModule } from './vvf-routing.module';

import { VvfPage } from './vvf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VvfPageRoutingModule
  ],
  declarations: [VvfPage]
})
export class VvfPageModule {}
