import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MfrPage } from './mfr.page';

const routes: Routes = [
  {
    path: '',
    component: MfrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MfrPageRoutingModule {}
