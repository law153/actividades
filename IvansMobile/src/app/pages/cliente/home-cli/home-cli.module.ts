import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeCliPageRoutingModule } from './home-cli-routing.module';

import { HomeCliPage } from './home-cli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeCliPageRoutingModule
  ],
  declarations: [HomeCliPage]
})
export class HomeCliPageModule {}
