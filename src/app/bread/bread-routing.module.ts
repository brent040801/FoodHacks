import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadPage } from './bread.page';

const routes: Routes = [
  {
    path: '',
    component: BreadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreadPageRoutingModule {}
