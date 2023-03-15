import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent {
  email: string;

  constructor(private auth: AuthService, private router: Router) {}

  verifyEmail() {
    this.auth.forgotPassword(this.email);
    this.email = '';
    this.router.navigate(['verifyemail']);
  }
}
