import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.page.html',
  styleUrls: ['./prueba4.page.scss'],
})
export class Prueba4Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba4', 'true');
    // Verifica cuáles pruebas están completadas
    const pruebas = ['prueba1', 'prueba2', 'prueba3', 'prueba4', 'prueba5', 'prueba6', 'prueba7'];
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
