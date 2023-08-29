import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitsCliPageRoutingModule } from './kits-cli-routing.module';

import { KitsCliPage } from './kits-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitsCliPageRoutingModule
  ],
  declarations: [KitsCliPage]
})
export class KitsCliPageModule {}
