import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniSesionPageRoutingModule } from './ini-sesion-routing.module';

import { IniSesionPage } from './ini-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniSesionPageRoutingModule
  ],
  declarations: [IniSesionPage]
})
export class IniSesionPageModule {}
