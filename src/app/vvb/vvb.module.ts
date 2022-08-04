import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VvbPageRoutingModule } from './vvb-routing.module';

import { VvbPage } from './vvb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VvbPageRoutingModule
  ],
  declarations: [VvbPage]
})
export class VvbPageModule {}
