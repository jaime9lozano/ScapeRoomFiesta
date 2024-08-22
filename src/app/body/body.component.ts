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
    { title: 'Resolver', url: '/resolver', icon: 'checkmark-circle' }
  ];

  constructor() { }

  ngOnInit() {
    this.updateMenu();
  }

  updateMenu() {
    const grupo = Number(localStorage.getItem('grupo'));

    if (grupo <= 0) {
      // Mostrar solo Inicio si no hay grupo seleccionado
      this.appPages = this.allPages.filter(page => page.url === '/inicio');
    } else {
      // Verificar si todas las pruebas están completadas
      const todasCompletadas = this.allPages.slice(1, 8).every(page => {
        const pruebaCompletada = localStorage.getItem(page.title.replace(' ', '').toLowerCase());
        return pruebaCompletada === 'true';
      });

      if (todasCompletadas) {
        // Mostrar solo la página de Resolver si todas las pruebas están completadas
        this.appPages = this.allPages.filter(page => page.url === '/resolver');
      } else {
        // Mostrar solo las pruebas incompletas
        this.appPages = this.allPages.filter(page => {
          if (page.url === '/resolver' || page.url === '/inicio') return false;
          const pruebaCompletada = localStorage.getItem(page.title.replace(' ', '').toLowerCase());
          return !pruebaCompletada || pruebaCompletada === 'false';
        });
      }
    }
  }

}
