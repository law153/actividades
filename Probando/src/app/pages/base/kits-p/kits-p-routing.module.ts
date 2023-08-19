import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitsPPage } from './kits-p.page';

const routes: Routes = [
  {
    path: '',
    component: KitsPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitsPPageRoutingModule {}
