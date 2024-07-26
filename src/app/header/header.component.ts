import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  showFinishButton: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkGroupStatus();
  }

  checkGroupStatus() {
    const grupo = Number(localStorage.getItem('grupo'));
    this.showFinishButton = grupo > 0;
  }

  finishScapeRoom() {
    localStorage.setItem('grupo', '0');
    localStorage.setItem('prueba1', 'false');
    localStorage.setItem('prueba2', 'false');
    localStorage.setItem('prueba3', 'false');
    localStorage.setItem('prueba4', 'false');
    localStorage.setItem('prueba5', 'false');
    localStorage.setItem('prueba6', 'false');
    localStorage.setItem('prueba7', 'false');
    this.router.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }
}
