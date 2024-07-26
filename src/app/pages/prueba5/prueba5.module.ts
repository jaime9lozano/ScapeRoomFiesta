import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Prueba5PageRoutingModule } from './prueba5-routing.module';

import { Prueba5Page } from './prueba5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Prueba5PageRoutingModule
  ]
})
export class Prueba5PageModule {}
