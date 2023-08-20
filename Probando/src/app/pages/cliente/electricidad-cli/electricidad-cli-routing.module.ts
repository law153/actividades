import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadCliPage } from './electricidad-cli.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadCliPageRoutingModule {}
