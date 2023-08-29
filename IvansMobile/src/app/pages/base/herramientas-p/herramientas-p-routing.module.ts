import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasPPage } from './herramientas-p.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasPPageRoutingModule {}
