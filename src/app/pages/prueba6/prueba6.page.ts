import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba6',
  templateUrl: './prueba6.page.html',
  styleUrls: ['./prueba6.page.scss'],
})
export class Prueba6Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba6', 'true');
    this.router.navigate(['/prueba7']).then(() => {
      window.location.reload();
    });
  }

}
