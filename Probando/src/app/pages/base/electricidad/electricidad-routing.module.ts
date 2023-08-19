import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadPage } from './electricidad.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadPageRoutingModule {}
