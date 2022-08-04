import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlcPage } from './blc.page';

const routes: Routes = [
  {
    path: '',
    component: BlcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlcPageRoutingModule {}
