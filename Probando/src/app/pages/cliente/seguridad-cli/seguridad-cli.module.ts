import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadCliPageRoutingModule } from './seguridad-cli-routing.module';

import { SeguridadCliPage } from './seguridad-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadCliPageRoutingModule
  ],
  declarations: [SeguridadCliPage]
})
export class SeguridadCliPageModule {}
