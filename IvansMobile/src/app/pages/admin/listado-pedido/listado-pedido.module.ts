import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPedidoPageRoutingModule } from './listado-pedido-routing.module';

import { ListadoPedidoPage } from './listado-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPedidoPageRoutingModule
  ],
  declarations: [ListadoPedidoPage]
})
export class ListadoPedidoPageModule {}
