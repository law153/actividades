import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerramientasPCliPageRoutingModule } from './herramientas-p-cli-routing.module';

import { HerramientasCliPPage } from './herramientas-p-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerramientasPCliPageRoutingModule
  ],
  declarations: [HerramientasCliPPage]
})
export class HerramientasPCliPageModule {}
