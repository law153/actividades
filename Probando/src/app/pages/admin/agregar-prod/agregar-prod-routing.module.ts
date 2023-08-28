import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarProdPage } from './agregar-prod.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarProdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarProdPageRoutingModule {}
