import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FijacionesCliPPageRoutingModule } from './fijaciones-cli-p-routing.module';

import { FijacionesCliPPage } from './fijaciones-cli-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FijacionesCliPPageRoutingModule
  ],
  declarations: [FijacionesCliPPage]
})
export class FijacionesCliPPageModule {}
