import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.page.html',
  styleUrls: ['./prueba2.page.scss'],
})
export class Prueba2Page {
  palabraIngresada: string = '';

  constructor(private alertController: AlertController,private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba2', 'true');
    // Verifica cuáles pruebas están completadas
    const pruebas = ['prueba2', 'prueba3', 'prueba4', 'prueba5', 'prueba6', 'prueba7', 'prueba1'];
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

  async verificarPalabra() {
    if (this.palabraIngresada.toLowerCase() === 'padel') {
      await this.mostrarAlerta('Correcto', '¡Busca una pelota de padel!', 'markAsCompleted');
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

}
