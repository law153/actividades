import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasfiteriaCliPage } from './gasfiteria-cli.page';

const routes: Routes = [
  {
    path: '',
    component: GasfiteriaCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasfiteriaCliPageRoutingModule {}
