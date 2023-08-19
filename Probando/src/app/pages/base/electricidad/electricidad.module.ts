import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricidadPageRoutingModule } from './electricidad-routing.module';

import { ElectricidadPage } from './electricidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricidadPageRoutingModule
  ],
  declarations: [ElectricidadPage]
})
export class ElectricidadPageModule {}
