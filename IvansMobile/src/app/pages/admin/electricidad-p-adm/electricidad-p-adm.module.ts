import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricidadPAdmPageRoutingModule } from './electricidad-p-adm-routing.module';

import { ElectricidadAdmPPage } from './electricidad-p-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricidadPAdmPageRoutingModule
  ],
  declarations: [ElectricidadAdmPPage]
})
export class ElectricidadPAdmPageModule {}
