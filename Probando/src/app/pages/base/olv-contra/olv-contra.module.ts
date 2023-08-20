import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvContraPageRoutingModule } from './olv-contra-routing.module';

import { OlvContraPage } from './olv-contra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvContraPageRoutingModule
  ],
  declarations: [OlvContraPage]
})
export class OlvContraPageModule {}
