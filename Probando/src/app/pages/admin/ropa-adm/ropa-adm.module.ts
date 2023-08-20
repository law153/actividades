import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RopaAdmPageRoutingModule } from './ropa-adm-routing.module';

import { RopaAdmPage } from './ropa-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RopaAdmPageRoutingModule
  ],
  declarations: [RopaAdmPage]
})
export class RopaAdmPageModule {}
