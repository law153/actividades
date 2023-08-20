import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadPAdmPage } from './electricidad-p-adm.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadPAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadPAdmPageRoutingModule {}
