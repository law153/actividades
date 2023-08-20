import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitsCliPage } from './kits-cli.page';

const routes: Routes = [
  {
    path: '',
    component: KitsCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitsCliPageRoutingModule {}
