import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacPageRoutingModule } from './fac-routing.module';

import { FacPage } from './fac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacPageRoutingModule
  ],
  declarations: [FacPage]
})
export class FacPageModule {}
