import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GfrPageRoutingModule } from './gfr-routing.module';

import { GfrPage } from './gfr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GfrPageRoutingModule
  ],
  declarations: [GfrPage]
})
export class GfrPageModule {}
