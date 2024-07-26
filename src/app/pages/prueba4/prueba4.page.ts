import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba4',
  templateUrl: './prueba4.page.html',
  styleUrls: ['./prueba4.page.scss'],
})
export class Prueba4Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba4', 'true');
    this.router.navigate(['/prueba5']).then(() => {
      window.location.reload();
    });
  }

}
