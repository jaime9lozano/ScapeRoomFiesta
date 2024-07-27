import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  tiempoTranscurrido: string = '';
  showFinishButton: boolean = false;
  showTimeCounter: boolean = false;
  private contadorInterval: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkGroupStatus();
    this.iniciarContador();
  }

  checkGroupStatus() {
    const grupo = Number(localStorage.getItem('grupo'));
    this.showFinishButton = grupo > 0;
  }

  iniciarContador() {
    const tiempoInicio = localStorage.getItem('tiempo');
    if (tiempoInicio) {
      this.showTimeCounter = true;
      this.contadorInterval = setInterval(() => {
        const tiempoTranscurridoMs = Date.now() - parseInt(tiempoInicio, 10);
        this.tiempoTranscurrido = this.formatTiempo(tiempoTranscurridoMs);
      }, 1000);
    } else {
      this.showTimeCounter = false;
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

  finishScapeRoom() {
    localStorage.setItem('grupo', '0');
    localStorage.setItem('prueba1', 'false');
    localStorage.setItem('prueba2', 'false');
    localStorage.setItem('prueba3', 'false');
    localStorage.setItem('prueba4', 'false');
    localStorage.setItem('prueba5', 'false');
    localStorage.setItem('prueba6', 'false');
    localStorage.setItem('prueba7', 'false');
    localStorage.removeItem('tiempo');
    this.router.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }
  ngOnDestroy() {
    if (this.contadorInterval) {
      clearInterval(this.contadorInterval);
    }
  }
}
