import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba4PageRoutingModule } from './prueba4-routing.module';

import { Prueba4Page } from './prueba4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba4PageRoutingModule
  ]
})
export class Prueba4PageModule {}
