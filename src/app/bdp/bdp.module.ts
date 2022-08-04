import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BdpPageRoutingModule } from './bdp-routing.module';

import { BdpPage } from './bdp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BdpPageRoutingModule
  ],
  declarations: [BdpPage]
})
export class BdpPageModule {}
