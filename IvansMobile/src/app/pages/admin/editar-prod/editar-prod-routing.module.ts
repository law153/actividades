import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarProdPage } from './editar-prod.page';

const routes: Routes = [
  {
    path: '',
    component: EditarProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarProdPageRoutingModule {}
