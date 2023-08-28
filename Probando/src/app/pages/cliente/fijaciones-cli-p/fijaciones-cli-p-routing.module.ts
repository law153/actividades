import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FijacionesCliPPage } from './fijaciones-cli-p.page';

const routes: Routes = [
  {
    path: '',
    component: FijacionesCliPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FijacionesCliPPageRoutingModule {}
