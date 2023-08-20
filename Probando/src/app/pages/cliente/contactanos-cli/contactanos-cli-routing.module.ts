import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactanosCliPage } from './contactanos-cli.page';

const routes: Routes = [
  {
    path: '',
    component: ContactanosCliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactanosCliPageRoutingModule {}
