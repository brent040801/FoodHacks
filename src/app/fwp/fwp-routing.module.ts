import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FwpPage } from './fwp.page';

const routes: Routes = [
  {
    path: '',
    component: FwpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FwpPageRoutingModule {}
