import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BodyComponent} from "./body/body.component";
import {CommonModule, NgForOf} from "@angular/common";
import {InicioPage} from "./pages/inicio/inicio.page";
import {Prueba1Page} from "./pages/prueba1/prueba1.page";
import {Prueba2Page} from "./pages/prueba2/prueba2.page";
import {Prueba3Page} from "./pages/prueba3/prueba3.page";
import {Prueba4Page} from "./pages/prueba4/prueba4.page";
import {Prueba5Page} from "./pages/prueba5/prueba5.page";
import {Prueba6Page} from "./pages/prueba6/prueba6.page";
import {Prueba7Page} from "./pages/prueba7/prueba7.page";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    InicioPage,
    Prueba1Page,
    Prueba2Page,
    Prueba3Page,
    Prueba4Page,
    Prueba5Page,
    Prueba6Page,
    Prueba7Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    NgForOf,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
