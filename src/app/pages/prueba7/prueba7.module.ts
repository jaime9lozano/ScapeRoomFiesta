import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba7PageRoutingModule } from './prueba7-routing.module';

import { Prueba7Page } from './prueba7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba7PageRoutingModule
  ]
})
export class Prueba7PageModule {}
