import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProdPageRoutingModule } from './editar-prod-routing.module';

import { EditarProdPage } from './editar-prod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProdPageRoutingModule
  ],
  declarations: [EditarProdPage]
})
export class EditarProdPageModule {}
