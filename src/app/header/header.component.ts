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
    this.router.navigate(['/inicio']).then(() => {
      window.location.reload();
    });
  }
}
