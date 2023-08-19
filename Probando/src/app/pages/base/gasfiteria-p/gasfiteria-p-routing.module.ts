import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasfiteriaPPage } from './gasfiteria-p.page';

const routes: Routes = [
  {
    path: '',
    component: GasfiteriaPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasfiteriaPPageRoutingModule {}
