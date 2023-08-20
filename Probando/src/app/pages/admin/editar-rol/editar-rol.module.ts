import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarRolPageRoutingModule } from './editar-rol-routing.module';

import { EditarRolPage } from './editar-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarRolPageRoutingModule
  ],
  declarations: [EditarRolPage]
})
export class EditarRolPageModule {}
