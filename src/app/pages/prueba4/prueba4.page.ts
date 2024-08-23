import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.page.html',
  styleUrls: ['./prueba4.page.scss'],
})
export class Prueba4Page {
  palabraIngresada: string = '';

  @ViewChild('audioPlayer', { static: false }) audioPlayer: any;
  constructor(private alertController: AlertController,private router: Router) { }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  async verificarPalabra() {
    if (this.palabraIngresada.toLowerCase() === 'macarena') {
      await this.mostrarAlerta('Correcto', '¡Tenéis que buscar en una discoteca!', 'markAsCompleted');
    } else {
      await this.mostrarAlerta('Error', 'Canción incorrecta. Inténtalo de nuevo.');
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
    localStorage.setItem('prueba4', 'true');
    // Verifica cuáles pruebas están completadas
    const pruebas = ['prueba4', 'prueba5', 'prueba6', 'prueba7', 'prueba1', 'prueba2', 'prueba3'];
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
