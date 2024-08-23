import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba7',
  templateUrl: './prueba7.page.html',
  styleUrls: ['./prueba7.page.scss'],
})
export class Prueba7Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba7', 'true');
    // Verifica cuáles pruebas están completadas
    const pruebas = ['prueba7','prueba1','prueba2', 'prueba3', 'prueba4', 'prueba5', 'prueba6'];
    let siguienteRuta = '/resolver';  // Ruta por defecto si todas están completadas

    for (const prueba of pruebas) {
      if (localStorage.getItem(prueba) !== 'true') {
        // Si encuentra una prueba no completada, establece la siguiente ruta a esa prueba
        siguienteRuta = `/${prueba}`;
        break;
      }
    }

    // Navega a la ruta correspondiente y recarga la página
    this.router.navigate([siguienteRuta]).then(() => {
      window.location.reload();
    });
  }

}
