import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasCliPage } from './herramientas-cli.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasCliPageRoutingModule {}
