import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricidadPCliPageRoutingModule } from './electricidad-p-cli-routing.module';

import { ElectricidadCliPPage } from './electricidad-p-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricidadPCliPageRoutingModule
  ],
  declarations: [ElectricidadCliPPage]
})
export class ElectricidadPCliPageModule {}
