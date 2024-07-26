import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba3PageRoutingModule } from './prueba3-routing.module';

import { Prueba3Page } from './prueba3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba3PageRoutingModule
  ]
})
export class Prueba3PageModule {}
