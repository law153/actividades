import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfilAdmPageRoutingModule } from './editar-perfil-adm-routing.module';

import { EditarPerfilAdmPage } from './editar-perfil-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfilAdmPageRoutingModule
  ],
  declarations: [EditarPerfilAdmPage]
})
export class EditarPerfilAdmPageModule {}
