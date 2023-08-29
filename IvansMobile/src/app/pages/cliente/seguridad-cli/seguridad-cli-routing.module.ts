import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadCliPage } from './seguridad-cli.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadCliPageRoutingModule {}
