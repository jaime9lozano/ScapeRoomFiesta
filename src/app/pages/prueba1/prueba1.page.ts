import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.page.html',
  styleUrls: ['./prueba1.page.scss'],
})
export class Prueba1Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba1', 'true');
    this.router.navigate(['/prueba2']).then(() => {
      window.location.reload();
    });
  }

}
