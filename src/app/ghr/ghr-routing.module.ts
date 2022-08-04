import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GhrPage } from './ghr.page';

const routes: Routes = [
  {
    path: '',
    component: GhrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GhrPageRoutingModule {}
