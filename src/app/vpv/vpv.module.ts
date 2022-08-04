import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VpvPageRoutingModule } from './vpv-routing.module';

import { VpvPage } from './vpv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VpvPageRoutingModule
  ],
  declarations: [VpvPage]
})
export class VpvPageModule {}
