import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba6PageRoutingModule } from './prueba6-routing.module';

import { Prueba6Page } from './prueba6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba6PageRoutingModule
  ]
})
export class Prueba6PageModule {}
