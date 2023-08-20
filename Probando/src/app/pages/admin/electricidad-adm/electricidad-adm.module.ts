import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricidadAdmPageRoutingModule } from './electricidad-adm-routing.module';

import { ElectricidadAdmPage } from './electricidad-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricidadAdmPageRoutingModule
  ],
  declarations: [ElectricidadAdmPage]
})
export class ElectricidadAdmPageModule {}
