import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitsPPageRoutingModule } from './kits-p-routing.module';

import { KitsPPage } from './kits-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitsPPageRoutingModule
  ],
  declarations: [KitsPPage]
})
export class KitsPPageModule {}
