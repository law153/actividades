import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasfiteriaPageRoutingModule } from './gasfiteria-routing.module';

import { GasfiteriaPage } from './gasfiteria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasfiteriaPageRoutingModule
  ],
  declarations: [GasfiteriaPage]
})
export class GasfiteriaPageModule {}
