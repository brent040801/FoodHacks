import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VvfPage } from './vvf.page';

const routes: Routes = [
  {
    path: '',
    component: VvfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VvfPageRoutingModule {}
