import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn$: Observable<boolean>;  
  constructor(private auths: AuthService) {}


  ngOnInit() {
    this.isLoggedIn$ = this.auths.isLoggedIn; 
  }

  logout() {
    this.auths.logout();    
  }

}
