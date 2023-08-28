import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FijacionesAdmPPageRoutingModule } from './fijaciones-adm-p-routing.module';

import { FijacionesAdmPPage } from './fijaciones-adm-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FijacionesAdmPPageRoutingModule
  ],
  declarations: [FijacionesAdmPPage]
})
export class FijacionesAdmPPageModule {}
