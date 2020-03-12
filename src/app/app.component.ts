import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sakila-ui';
  constructor(private router: Router, private loginService: LoginService) {
    console.log('[AppComponent] ..contructor..');
  }

  public navigate() {
    console.log('[AppComponent] ..navigate..');
    this.router.navigateByUrl('/');
  }

}
