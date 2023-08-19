import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RopaPPage } from './ropa-p.page';

const routes: Routes = [
  {
    path: '',
    component: RopaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopaPPageRoutingModule {}
