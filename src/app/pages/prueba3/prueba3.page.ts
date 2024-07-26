import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.page.html',
  styleUrls: ['./prueba3.page.scss'],
})
export class Prueba3Page {

  constructor(private router: Router) { }

  markAsCompleted() {
    localStorage.setItem('prueba3', 'true');
    this.router.navigate(['/prueba4']).then(() => {
      window.location.reload();
    });
  }

}
