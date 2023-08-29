import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvContraPage } from './olv-contra.page';

const routes: Routes = [
  {
    path: '',
    component: OlvContraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvContraPageRoutingModule {}
