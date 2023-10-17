import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ContactanosPageRoutingModule } from './contactanos-routing.module';

import { ContactanosPage } from './contactanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactanosPageRoutingModule
  ],
  declarations: [ContactanosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactanosPageModule {}
