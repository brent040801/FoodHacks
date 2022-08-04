import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PSBPage } from './psb.page';

const routes: Routes = [
  {
    path: '',
    component: PSBPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PSBPageRoutingModule {}
