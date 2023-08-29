import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfilAdmPage } from './editar-perfil-adm.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfilAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfilAdmPageRoutingModule {}
