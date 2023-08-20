import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RopaCliPageRoutingModule } from './ropa-cli-routing.module';

import { RopaCliPage } from './ropa-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RopaCliPageRoutingModule
  ],
  declarations: [RopaCliPage]
})
export class RopaCliPageModule {}
