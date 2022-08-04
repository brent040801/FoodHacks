import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BcPage } from './bc.page';

const routes: Routes = [
  {
    path: '',
    component: BcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BcPageRoutingModule {}
