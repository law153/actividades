import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijacionesAdmPage } from './fijaciones-adm.page';

const routes: Routes = [
  {
    path: '',
    component: FijacionesAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FijacionesAdmPageRoutingModule {}
