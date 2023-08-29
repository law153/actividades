import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniSesionPage } from './ini-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: IniSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniSesionPageRoutingModule {}
