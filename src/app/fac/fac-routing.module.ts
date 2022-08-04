import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacPage } from './fac.page';

const routes: Routes = [
  {
    path: '',
    component: FacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacPageRoutingModule {}
