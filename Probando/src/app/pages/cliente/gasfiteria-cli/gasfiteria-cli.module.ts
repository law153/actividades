import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GasfiteriaCliPageRoutingModule } from './gasfiteria-cli-routing.module';

import { GasfiteriaCliPage } from './gasfiteria-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GasfiteriaCliPageRoutingModule
  ],
  declarations: [GasfiteriaCliPage]
})
export class GasfiteriaCliPageModule {}
