import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerramientasPAdmPage } from './herramientas-p-adm.page';

const routes: Routes = [
  {
    path: '',
    component: HerramientasPAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasPAdmPageRoutingModule {}
