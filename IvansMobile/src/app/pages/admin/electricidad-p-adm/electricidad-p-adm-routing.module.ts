import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadAdmPPage } from './electricidad-p-adm.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadAdmPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadPAdmPageRoutingModule {}
