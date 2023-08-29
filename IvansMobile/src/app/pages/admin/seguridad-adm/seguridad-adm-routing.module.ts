import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadAdmPage } from './seguridad-adm.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadAdmPageRoutingModule {}
