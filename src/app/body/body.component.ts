import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent  {

  public appPages = [
    { title: 'Prueba 1', url: '/prueba1', icon: 'bag'},
    {
      title: 'Prueba 2',
      url: '/prueba2',
      icon: 'restaurant',
    },
    {
      title: 'Prueba 3',
      url: '/prueba3',
      icon: 'list',
    },
    {
      title: 'Prueba 4',
      url: '/prueba4',
      icon: 'list',
    },
    {
      title: 'Prueba 5',
      url: '/prueba5',
      icon: 'list',
    },
    {
      title: 'Prueba 6',
      url: '/prueba6',
      icon: 'list',
    },
    {
      title: 'Prueba 7',
      url: '/prueba7',
      icon: 'list',
    },
  ]

  constructor() { }

}
