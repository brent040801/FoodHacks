import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FwpPageRoutingModule } from './fwp-routing.module';

import { FwpPage } from './fwp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FwpPageRoutingModule
  ],
  declarations: [FwpPage]
})
export class FwpPageModule {}
