import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarContraAdmPage } from './cambiar-contra-adm.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarContraAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarContraAdmPageRoutingModule {}
