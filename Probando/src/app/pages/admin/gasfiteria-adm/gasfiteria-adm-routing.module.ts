import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GasfiteriaAdmPage } from './gasfiteria-adm.page';

const routes: Routes = [
  {
    path: '',
    component: GasfiteriaAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GasfiteriaAdmPageRoutingModule {}
