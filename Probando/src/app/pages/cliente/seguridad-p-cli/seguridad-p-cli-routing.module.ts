import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadPCliPage } from './seguridad-p-cli.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadPCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadPCliPageRoutingModule {}
