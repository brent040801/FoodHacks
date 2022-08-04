import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MbbPage } from './mbb.page';

const routes: Routes = [
  {
    path: '',
    component: MbbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MbbPageRoutingModule {}
