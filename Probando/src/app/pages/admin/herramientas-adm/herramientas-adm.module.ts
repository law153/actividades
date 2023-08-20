import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasAdmPageRoutingModule } from './herramientas-adm-routing.module';

import { HerramientasAdmPage } from './herramientas-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasAdmPageRoutingModule
  ],
  declarations: [HerramientasAdmPage]
})
export class HerramientasAdmPageModule {}
