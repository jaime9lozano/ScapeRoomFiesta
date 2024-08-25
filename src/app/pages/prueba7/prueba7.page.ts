import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-prueba7',
  templateUrl: './prueba7.page.html',
  styleUrls: ['./prueba7.page.scss'],
})
export class Prueba7Page {
  palabraIngresada: string = '';
  images = [
    '/assets/img/photo1.jpg',
    '/assets/img/photo2.jpg',
    '/assets/img/photo3.jpg',
    '/assets/img/photo4.jpg',
    '/assets/img/photo5.jpg'
  ];
  constructor(private alertController: AlertController,private router: Router) { }

  async verificarPalabra() {
    if (this.palabraIngresada.trim().toLowerCase() === 'paella') {
      await this.mostrarAlerta('Correcto', '¡Correcto! Tenéis que buscar a Jaime.', 'markAsCompleted');
    } else {
      await this.mostrarAlerta('Incorrecto', 'Incorrecta, prueba de nuevo.');
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
