import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasPAdmPageRoutingModule } from './herramientas-p-adm-routing.module';

import { HerramientasPAdmPage } from './herramientas-p-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasPAdmPageRoutingModule
  ],
  declarations: [HerramientasPAdmPage]
})
export class HerramientasPAdmPageModule {}
