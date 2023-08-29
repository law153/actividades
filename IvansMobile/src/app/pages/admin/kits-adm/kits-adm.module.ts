import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitsAdmPageRoutingModule } from './kits-adm-routing.module';

import { KitsAdmPage } from './kits-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitsAdmPageRoutingModule
  ],
  declarations: [KitsAdmPage]
})
export class KitsAdmPageModule {}
