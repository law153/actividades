import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeCliPage } from './home-cli.page';

const routes: Routes = [
  {
    path: '',
    component: HomeCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeCliPageRoutingModule {}
