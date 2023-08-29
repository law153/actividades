import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijacionesCliPage } from './fijaciones-cli.page';

const routes: Routes = [
  {
    path: '',
    component: FijacionesCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FijacionesCliPageRoutingModule {}
