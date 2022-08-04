import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrainsPage } from './grains.page';

const routes: Routes = [
  {
    path: '',
    component: GrainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrainsPageRoutingModule {}
