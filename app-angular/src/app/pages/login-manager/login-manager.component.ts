import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';
import { AuthService } from 'src/app/components/navbar/auth.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  email: string = '';
  password: string = '';

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private auth: AuthService
  ) {}

  signIn(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (response) => {
        this.auth.setLoggedInUser(response.user);
        this.router.navigate(['/accueil-manager']);
      },
      (error) => {
        console.error('Authentication failed', error);
      }
    );
  }

}
