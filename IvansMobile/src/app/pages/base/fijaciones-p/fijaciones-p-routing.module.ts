import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijacionesPPage } from './fijaciones-p.page';

const routes: Routes = [
  {
    path: '',
    component: FijacionesPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FijacionesPPageRoutingModule {}
