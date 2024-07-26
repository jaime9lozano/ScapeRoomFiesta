import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba5',
  templateUrl: './prueba5.page.html',
  styleUrls: ['./prueba5.page.scss'],
})
export class Prueba5Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba5', 'true');
    this.router.navigate(['/prueba6']).then(() => {
      window.location.reload();
    });
  }

}
