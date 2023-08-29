import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RopaCliPage } from './ropa-cli.page';

const routes: Routes = [
  {
    path: '',
    component: RopaCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopaCliPageRoutingModule {}
