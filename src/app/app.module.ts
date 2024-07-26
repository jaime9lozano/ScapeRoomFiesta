import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BodyComponent} from "./body/body.component";
import {CommonModule, NgForOf} from "@angular/common";

@NgModule({
    declarations: [AppComponent, BodyComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicModule,
    RouterLinkActive,
    NgForOf,
    RouterLink,
    RouterOutlet,
    CommonModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
