import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  // constructor() {}
  email: string = '';
  password: string = '';

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signIn(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (response) => {
        // Authentication successful
        // You may want to store user details in a service or local storage
        // Redirect to the desired page, for example:
        this.router.navigate(['/accueil']);
      },
      (error) => {
        // Handle authentication error (e.g., display an error message)
        console.error('Authentication failed', error);
      }
    );
  }
}
