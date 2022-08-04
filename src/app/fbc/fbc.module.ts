import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FbcPageRoutingModule } from './fbc-routing.module';

import { FbcPage } from './fbc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FbcPageRoutingModule
  ],
  declarations: [FbcPage]
})
export class FbcPageModule {}
