import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prueba7Page } from './prueba7.page';

const routes: Routes = [
  {
    path: '',
    component: Prueba7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prueba7PageRoutingModule {}
