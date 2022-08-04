import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BcPageRoutingModule } from './bc-routing.module';

import { BcPage } from './bc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BcPageRoutingModule
  ],
  declarations: [BcPage]
})
export class BcPageModule {}
