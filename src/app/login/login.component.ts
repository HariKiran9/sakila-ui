import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public user: User;

  constructor(private router: Router, private loginservice: LoginService, private fb: FormBuilder) { }

  ngOnInit() {
    //From Builder
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      password: [''],
      invalidLogin: ['false']
    });
  }

  checkLogin() {
    var formData: FormData = new FormData();
    formData.append("name", this.loginForm.get('name').value);
    formData.append("password", this.loginForm.get('password').value);
    console.log('FormData : ', formData)

    this.loginservice.authenticate(formData).subscribe(response => console.log('response', response), (err) => console.log(err))
    let isLogged = false;
    if (isLogged) {
      this.router.navigate([''])
      this.loginForm.patchValue({
        invalidLogin: false
      });
    } else {
      this.loginForm.patchValue({
        invalidLogin: true
      });
    }//else
  }

}//class