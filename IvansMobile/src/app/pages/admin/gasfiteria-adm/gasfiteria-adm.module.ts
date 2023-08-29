import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasfiteriaAdmPageRoutingModule } from './gasfiteria-adm-routing.module';

import { GasfiteriaAdmPage } from './gasfiteria-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasfiteriaAdmPageRoutingModule
  ],
  declarations: [GasfiteriaAdmPage]
})
export class GasfiteriaAdmPageModule {}
