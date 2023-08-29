import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAdmPageRoutingModule } from './perfil-adm-routing.module';

import { PerfilAdmPage } from './perfil-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAdmPageRoutingModule
  ],
  declarations: [PerfilAdmPage]
})
export class PerfilAdmPageModule {}
