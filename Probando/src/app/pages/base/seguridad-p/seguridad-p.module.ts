import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadPPageRoutingModule } from './seguridad-p-routing.module';

import { SeguridadPPage } from './seguridad-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadPPageRoutingModule
  ],
  declarations: [SeguridadPPage]
})
export class SeguridadPPageModule {}
