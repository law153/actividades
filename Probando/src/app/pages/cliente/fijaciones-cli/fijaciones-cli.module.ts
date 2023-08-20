import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FijacionesCliPageRoutingModule } from './fijaciones-cli-routing.module';

import { FijacionesCliPage } from './fijaciones-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FijacionesCliPageRoutingModule
  ],
  declarations: [FijacionesCliPage]
})
export class FijacionesCliPageModule {}
