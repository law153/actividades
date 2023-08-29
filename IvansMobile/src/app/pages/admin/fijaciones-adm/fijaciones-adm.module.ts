import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FijacionesAdmPageRoutingModule } from './fijaciones-adm-routing.module';

import { FijacionesAdmPage } from './fijaciones-adm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FijacionesAdmPageRoutingModule
  ],
  declarations: [FijacionesAdmPage]
})
export class FijacionesAdmPageModule {}
