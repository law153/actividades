import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasCliPageRoutingModule } from './herramientas-cli-routing.module';

import { HerramientasCliPage } from './herramientas-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasCliPageRoutingModule
  ],
  declarations: [HerramientasCliPage]
})
export class HerramientasCliPageModule {}
