import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarContraAdmPageRoutingModule } from './cambiar-contra-adm-routing.module';

import { CambiarContraAdmPage } from './cambiar-contra-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarContraAdmPageRoutingModule
  ],
  declarations: [CambiarContraAdmPage]
})
export class CambiarContraAdmPageModule {}
