import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba1PageRoutingModule } from './prueba1-routing.module';

import { Prueba1Page } from './prueba1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba1PageRoutingModule
  ]
})
export class Prueba1PageModule {}
