import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VpvPage } from './vpv.page';

const routes: Routes = [
  {
    path: '',
    component: VpvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VpvPageRoutingModule {}
