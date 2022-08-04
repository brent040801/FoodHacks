import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FbcPage } from './fbc.page';

const routes: Routes = [
  {
    path: '',
    component: FbcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FbcPageRoutingModule {}
