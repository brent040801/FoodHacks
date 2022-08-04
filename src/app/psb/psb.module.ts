import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PSBPageRoutingModule } from './psb-routing.module';

import { PSBPage } from './psb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PSBPageRoutingModule
  ],
  declarations: [PSBPage]
})
export class PSBPageModule {}
