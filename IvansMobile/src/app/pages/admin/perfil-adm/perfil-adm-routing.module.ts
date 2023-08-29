import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAdmPage } from './perfil-adm.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAdmPageRoutingModule {}
