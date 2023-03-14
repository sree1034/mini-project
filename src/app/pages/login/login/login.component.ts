import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Auth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  emailIn: string = '';
  passwordIn: string = '';

  Name: string = '';
  emailUp: string = '';
  passwordUp: string = '';
  cpasswordUp: string = '';
  user: any;
  constructor(
    private auths: AuthService,
    private router: Router,
    public auth: Auth,
    private route: ActivatedRoute
  ) {}

  signup() {
    this.router.navigate(['signup']);
  }

  login() {
    if (this.emailIn == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your email...',
        background: '#212529',
      });
      return;
    }
    if (this.passwordIn == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter your password...',
        background: '#212529',
      });
      return;
    }
    const redirectUrl =
      this.route.snapshot.queryParamMap.get('redirectUrl') || '';
    this.auths.login(this.emailIn, this.passwordIn, redirectUrl);
    this.emailIn = '';
    this.passwordIn = '';
  }

  forgotPassword() {
    this.router.navigate(['forgotpassword']);
  }
}
