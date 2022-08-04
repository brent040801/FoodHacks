import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MbbPageRoutingModule } from './mbb-routing.module';

import { MbbPage } from './mbb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MbbPageRoutingModule
  ],
  declarations: [MbbPage]
})
export class MbbPageModule {}
