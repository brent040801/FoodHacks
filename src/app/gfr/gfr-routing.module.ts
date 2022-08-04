import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GfrPage } from './gfr.page';

const routes: Routes = [
  {
    path: '',
    component: GfrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GfrPageRoutingModule {}
