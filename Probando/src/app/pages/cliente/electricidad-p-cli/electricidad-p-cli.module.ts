import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectricidadPCliPageRoutingModule } from './electricidad-p-cli-routing.module';

import { ElectricidadPCliPage } from './electricidad-p-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectricidadPCliPageRoutingModule
  ],
  declarations: [ElectricidadPCliPage]
})
export class ElectricidadPCliPageModule {}
