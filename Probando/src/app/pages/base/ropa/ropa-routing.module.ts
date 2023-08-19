import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RopaPage } from './ropa.page';

const routes: Routes = [
  {
    path: '',
    component: RopaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopaPageRoutingModule {}
