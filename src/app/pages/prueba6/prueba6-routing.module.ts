import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Prueba6Page } from './prueba6.page';

const routes: Routes = [
  {
    path: '',
    component: Prueba6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Prueba6PageRoutingModule {}
