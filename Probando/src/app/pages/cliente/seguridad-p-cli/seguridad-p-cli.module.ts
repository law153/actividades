import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguridadPCliPageRoutingModule } from './seguridad-p-cli-routing.module';

import { SeguridadPCliPage } from './seguridad-p-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguridadPCliPageRoutingModule
  ],
  declarations: [SeguridadPCliPage]
})
export class SeguridadPCliPageModule {}
