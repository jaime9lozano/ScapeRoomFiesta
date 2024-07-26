import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba7',
  templateUrl: './prueba7.page.html',
  styleUrls: ['./prueba7.page.scss'],
})
export class Prueba7Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba7', 'true');
    this.router.navigate(['/prueba1']).then(() => {
      window.location.reload();
    });
  }

}
