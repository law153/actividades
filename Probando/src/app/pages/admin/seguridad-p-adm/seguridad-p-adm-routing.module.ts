import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadPAdmPage } from './seguridad-p-adm.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadPAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadPAdmPageRoutingModule {}
