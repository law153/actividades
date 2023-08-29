import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadAdmPageRoutingModule } from './seguridad-adm-routing.module';

import { SeguridadAdmPage } from './seguridad-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadAdmPageRoutingModule
  ],
  declarations: [SeguridadAdmPage]
})
export class SeguridadAdmPageModule {}
