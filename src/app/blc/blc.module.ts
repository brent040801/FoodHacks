import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlcPageRoutingModule } from './blc-routing.module';

import { BlcPage } from './blc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlcPageRoutingModule
  ],
  declarations: [BlcPage]
})
export class BlcPageModule {}
