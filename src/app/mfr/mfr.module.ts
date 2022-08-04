import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MfrPageRoutingModule } from './mfr-routing.module';

import { MfrPage } from './mfr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MfrPageRoutingModule
  ],
  declarations: [MfrPage]
})
export class MfrPageModule {}
