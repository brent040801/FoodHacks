import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FfsPage } from './ffs.page';

const routes: Routes = [
  {
    path: '',
    component: FfsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FfsPageRoutingModule {}
