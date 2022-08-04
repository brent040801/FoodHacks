import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VprPage } from './vpr.page';

const routes: Routes = [
  {
    path: '',
    component: VprPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VprPageRoutingModule {}
