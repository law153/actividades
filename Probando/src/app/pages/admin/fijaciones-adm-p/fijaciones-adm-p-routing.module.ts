import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijacionesAdmPPage } from './fijaciones-adm-p.page';

const routes: Routes = [
  {
    path: '',
    component: FijacionesAdmPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FijacionesAdmPPageRoutingModule {}
