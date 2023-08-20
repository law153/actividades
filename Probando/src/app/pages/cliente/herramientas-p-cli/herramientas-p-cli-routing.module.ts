import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasPCliPage } from './herramientas-p-cli.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasPCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasPCliPageRoutingModule {}
