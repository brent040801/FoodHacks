import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GhrPageRoutingModule } from './ghr-routing.module';

import { GhrPage } from './ghr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GhrPageRoutingModule
  ],
  declarations: [GhrPage]
})
export class GhrPageModule {}
