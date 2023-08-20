import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadAdmPage } from './electricidad-adm.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadAdmPageRoutingModule {}
