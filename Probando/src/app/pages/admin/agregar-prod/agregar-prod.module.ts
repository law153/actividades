import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarProdPageRoutingModule } from './agregar-prod-routing.module';

import { AgregarProdPage } from './agregar-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarProdPageRoutingModule
  ],
  declarations: [AgregarProdPage]
})
export class AgregarProdPageModule {}
