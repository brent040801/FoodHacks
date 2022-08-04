import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VvbPage } from './vvb.page';

const routes: Routes = [
  {
    path: '',
    component: VvbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvbPageRoutingModule {}
