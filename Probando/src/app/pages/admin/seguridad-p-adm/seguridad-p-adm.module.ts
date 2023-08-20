import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadPAdmPageRoutingModule } from './seguridad-p-adm-routing.module';

import { SeguridadPAdmPage } from './seguridad-p-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadPAdmPageRoutingModule
  ],
  declarations: [SeguridadPAdmPage]
})
export class SeguridadPAdmPageModule {}
