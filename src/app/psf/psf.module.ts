import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsfPageRoutingModule } from './psf-routing.module';

import { PsfPage } from './psf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsfPageRoutingModule
  ],
  declarations: [PsfPage]
})
export class PsfPageModule {}
