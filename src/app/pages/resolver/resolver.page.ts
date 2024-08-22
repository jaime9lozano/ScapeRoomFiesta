import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-resolver',
  templateUrl: './resolver.page.html',
  styleUrls: ['./resolver.page.scss'],
})
export class ResolverPage implements OnInit {
  palabraIngresada: string = '';
  tiempoTranscurrido: string = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.iniciarContador();
  }

  iniciarContador() {
    const tiempoInicio = localStorage.getItem('tiempo');
    if (tiempoInicio) {
      const tiempoTranscurridoMs = Date.now() - parseInt(tiempoInicio, 10);
      this.tiempoTranscurrido = this.formatTiempo(tiempoTranscurridoMs);
    }
  }

  formatTiempo(tiempoMs: number): string {
    const totalSegundos = Math.floor(tiempoMs / 1000);
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;
    return `${this.pad(horas)}:${this.pad(minutos)}:${this.pad(segundos)}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  async verificarPalabra() {
    if (this.palabraIngresada.toLowerCase() === 'alegria') {
      await this.mostrarAlerta('Enhorabuena', `Has acertado en ${this.tiempoTranscurrido}`);
    } else {
      await this.mostrarAlerta('Error', 'Palabra incorrecta. Inténtalo de nuevo.');
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }

}
