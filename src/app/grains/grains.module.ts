import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrainsPageRoutingModule } from './grains-routing.module';

import { GrainsPage } from './grains.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrainsPageRoutingModule
  ],
  declarations: [GrainsPage]
})
export class GrainsPageModule {}
