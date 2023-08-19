import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RopaPPageRoutingModule } from './ropa-p-routing.module';

import { RopaPPage } from './ropa-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RopaPPageRoutingModule
  ],
  declarations: [RopaPPage]
})
export class RopaPPageModule {}
