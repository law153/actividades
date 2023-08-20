import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RopaAdmPage } from './ropa-adm.page';

const routes: Routes = [
  {
    path: '',
    component: RopaAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RopaAdmPageRoutingModule {}
