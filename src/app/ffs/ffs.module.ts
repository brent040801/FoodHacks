import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FfsPageRoutingModule } from './ffs-routing.module';

import { FfsPage } from './ffs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FfsPageRoutingModule
  ],
  declarations: [FfsPage]
})
export class FfsPageModule {}
