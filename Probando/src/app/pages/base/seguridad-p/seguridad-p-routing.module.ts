import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguridadPPage } from './seguridad-p.page';

const routes: Routes = [
  {
    path: '',
    component: SeguridadPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadPPageRoutingModule {}
