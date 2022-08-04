import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FatPage } from './fat.page';

const routes: Routes = [
  {
    path: '',
    component: FatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FatPageRoutingModule {}
