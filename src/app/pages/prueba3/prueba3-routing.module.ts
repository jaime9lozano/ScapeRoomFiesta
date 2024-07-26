import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prueba3Page } from './prueba3.page';

const routes: Routes = [
  {
    path: '',
    component: Prueba3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prueba3PageRoutingModule {}
