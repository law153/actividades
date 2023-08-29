import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadCliPPage } from './electricidad-p-cli.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadCliPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadPCliPageRoutingModule {}
