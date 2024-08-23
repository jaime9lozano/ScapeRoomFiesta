import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-prueba5',
  templateUrl: './prueba5.page.html',
  styleUrls: ['./prueba5.page.scss'],
})
export class Prueba5Page {
  palabraIngresada: string = '';

  constructor(private alertController: AlertController,private router: Router) { }

  async verificarPalabra() {
    if (this.palabraIngresada.toLowerCase() === 'historia') {
      await this.mostrarAlerta('Correcto', 'Busca a Ivan para hacer un examen', 'markAsCompleted');
    } else {
      await this.mostrarAlerta('Error', 'Palabra incorrecta. Inténtelo de nuevo.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string, metodo?: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [{
        text: 'OK',
        handler: () => {
          if (metodo === 'markAsCompleted') {
            this.markAsCompleted();
          }
        }
      }]
    });
    await alert.present();
  }

  markAsCompleted() {
    localStorage.setItem('prueba5', 'true');
    // Verifica cuáles pruebas están completadas
    const pruebas = ['prueba5', 'prueba6', 'prueba7', 'prueba1', 'prueba2', 'prueba3', 'prueba4'];
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
