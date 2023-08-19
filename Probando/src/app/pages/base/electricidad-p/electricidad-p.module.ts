import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricidadPPageRoutingModule } from './electricidad-p-routing.module';

import { ElectricidadPPage } from './electricidad-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricidadPPageRoutingModule
  ],
  declarations: [ElectricidadPPage]
})
export class ElectricidadPPageModule {}
