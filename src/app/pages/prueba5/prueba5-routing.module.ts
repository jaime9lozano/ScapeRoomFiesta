import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prueba5Page } from './prueba5.page';

const routes: Routes = [
  {
    path: '',
    component: Prueba5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prueba5PageRoutingModule {}
