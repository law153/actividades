import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FijacionesPPageRoutingModule } from './fijaciones-p-routing.module';

import { FijacionesPPage } from './fijaciones-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FijacionesPPageRoutingModule
  ],
  declarations: [FijacionesPPage]
})
export class FijacionesPPageModule {}
