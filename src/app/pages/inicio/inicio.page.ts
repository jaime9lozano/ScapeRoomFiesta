import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {
  public grupos: number[] = [1, 2, 3, 4, 5, 6];
  constructor(private router: Router) { }
  seleccionarGrupo(grupo: number) {
    localStorage.setItem('tiempo', Date.now().toString());
    localStorage.setItem('grupo', grupo.toString());
    if (grupo === 1) {
      this.router.navigate(['/prueba1']).then(() => {
        window.location.reload();
      });
    }else if (grupo === 2) {
      this.router.navigate(['/prueba2']).then(() => {
        window.location.reload();
      });
    }else if (grupo === 3) {
      this.router.navigate(['/prueba3']).then(() => {
        window.location.reload();
      });
    }else if (grupo === 4){
      this.router.navigate(['/prueba4']).then(() => {
        window.location.reload();
      });
    }else if (grupo === 5){
      this.router.navigate(['/prueba5']).then(() => {
        window.location.reload();
      });
    }else if (grupo === 6){
      this.router.navigate(['/prueba6']).then(() => {
        window.location.reload();
      });
    }else if (grupo === 7){
      this.router.navigate(['/prueba7']).then(() => {
        window.location.reload();
      });
    }
  }
}
