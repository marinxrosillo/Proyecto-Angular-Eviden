import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { NgForm } from '@angular/forms';
import { Credentials } from 'src/models/Credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  login(form: NgForm) {
    console.log('form value', form.value);

    this.loginService.login(this.creds)
    .subscribe(response => {
      this.router.navigate(['films']);
    })
  }
}