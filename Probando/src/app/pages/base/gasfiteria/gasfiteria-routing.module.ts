import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasfiteriaPage } from './gasfiteria.page';

const routes: Routes = [
  {
    path: '',
    component: GasfiteriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasfiteriaPageRoutingModule {}
