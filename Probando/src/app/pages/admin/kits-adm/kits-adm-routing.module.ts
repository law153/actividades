import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitsAdmPage } from './kits-adm.page';

const routes: Routes = [
  {
    path: '',
    component: KitsAdmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitsAdmPageRoutingModule {}
