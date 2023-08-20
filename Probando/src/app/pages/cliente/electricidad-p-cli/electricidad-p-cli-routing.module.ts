import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadPCliPage } from './electricidad-p-cli.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadPCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadPCliPageRoutingModule {}
