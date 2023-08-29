import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPedidoPage } from './listado-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPedidoPageRoutingModule {}
