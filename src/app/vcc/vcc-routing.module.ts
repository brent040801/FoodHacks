import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VccPage } from './vcc.page';

const routes: Routes = [
  {
    path: '',
    component: VccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VccPageRoutingModule {}
