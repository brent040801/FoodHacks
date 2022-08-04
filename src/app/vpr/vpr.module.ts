import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VprPageRoutingModule } from './vpr-routing.module';

import { VprPage } from './vpr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VprPageRoutingModule
  ],
  declarations: [VprPage]
})
export class VprPageModule {}
