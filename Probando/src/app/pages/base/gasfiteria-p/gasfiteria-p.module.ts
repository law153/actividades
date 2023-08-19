import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasfiteriaPPageRoutingModule } from './gasfiteria-p-routing.module';

import { GasfiteriaPPage } from './gasfiteria-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasfiteriaPPageRoutingModule
  ],
  declarations: [GasfiteriaPPage]
})
export class GasfiteriaPPageModule {}
