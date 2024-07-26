import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prueba4Page } from './prueba4.page';

const routes: Routes = [
  {
    path: '',
    component: Prueba4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prueba4PageRoutingModule {}
