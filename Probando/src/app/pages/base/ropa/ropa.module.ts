import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RopaPageRoutingModule } from './ropa-routing.module';

import { RopaPage } from './ropa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RopaPageRoutingModule
  ],
  declarations: [RopaPage]
})
export class RopaPageModule {}
