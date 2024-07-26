import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.page.html',
  styleUrls: ['./prueba2.page.scss'],
})
export class Prueba2Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba2', 'true');
    this.router.navigate(['/prueba3']).then(() => {
      window.location.reload();
    });
  }

}
