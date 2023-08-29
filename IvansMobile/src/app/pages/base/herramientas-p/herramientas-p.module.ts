import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasPPageRoutingModule } from './herramientas-p-routing.module';

import { HerramientasPPage } from './herramientas-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasPPageRoutingModule
  ],
  declarations: [HerramientasPPage]
})
export class HerramientasPPageModule {}
