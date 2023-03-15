import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from '@angular/fire/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  emailIn: string = '';
  passwordIn: string = '';

  Name: string = '';
  emailUp: string = '';
  passwordUp: string = '';
  cpasswordUp: string = '';
  user: any;

  constructor(
    private auths: AuthService,
    public auth: Auth,
    private router: Router
  ) {}

  login() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    this.auths.user.subscribe((user: any) => {
      this.user = user;
    });
  }

  signUp() {
    if (this.Name == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your name...',
        background: '#212529',
      });
      return;
    }
    if (this.emailUp == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email...',
        background: '#212529',
      });
      return;
    }
    if (this.passwordUp == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password...',
        background: '#212529',
      });
      return;
    }
    if (this.passwordUp.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password alteast of 6 character or digit...',
        background: '#212529',
      });
      return;
    }
    if (this.passwordUp != this.cpasswordUp) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match... Please enter your password again!',
        background: '#212529',
      });
      return;
    }

    this.auths.signup(this.emailUp, this.passwordUp, this.Name);
    this.Name = '';
    this.emailUp = '';
    this.passwordUp = '';
    this.cpasswordUp = '';
  }
}
