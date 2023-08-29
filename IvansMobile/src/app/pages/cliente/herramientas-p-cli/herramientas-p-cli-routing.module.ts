import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasCliPPage } from './herramientas-p-cli.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasCliPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasPCliPageRoutingModule {}
