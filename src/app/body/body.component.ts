import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {

  public appPages: Array<{ title: string, url: string, icon: string }> = [];

  private allPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Prueba 1', url: '/prueba1', icon: 'flask' },
    { title: 'Prueba 2', url: '/prueba2', icon: 'flask' },
    { title: 'Prueba 3', url: '/prueba3', icon: 'flask' },
    { title: 'Prueba 4', url: '/prueba4', icon: 'flask' },
    { title: 'Prueba 5', url: '/prueba5', icon: 'flask' },
    { title: 'Prueba 6', url: '/prueba6', icon: 'flask' },
    { title: 'Prueba 7', url: '/prueba7', icon: 'flask' },
  ];

  constructor() { }

  ngOnInit() {
    this.updateMenu();
  }

  updateMenu() {
    const grupo = Number(localStorage.getItem('grupo'));

    if (grupo > 0) {
      // Mostrar todas las pruebas y quitar inicio
      this.appPages = this.allPages.filter(page => page.url !== '/inicio');
    } else {
      // Mostrar solo inicio
      this.appPages = this.allPages.filter(page => page.url === '/inicio');
    }
  }

}
