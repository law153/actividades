import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectricidadPPage } from './electricidad-p.page';

const routes: Routes = [
  {
    path: '',
    component: ElectricidadPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectricidadPPageRoutingModule {}
