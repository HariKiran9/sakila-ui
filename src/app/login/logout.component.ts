import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {


  constructor(private router: Router, private loginservice: LoginService) { }

  ngOnInit() {
    this.loginservice.logOut();
    this.router.navigate(['login']);
  }

}
