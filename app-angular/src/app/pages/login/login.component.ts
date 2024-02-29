import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AuthService } from 'src/app/components/navbar/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = 'bruollin@gmail.com';
  password: string = 'bruollin123';

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
        this.router.navigate(['/accueil']);
      },
      (error) => {
        console.error('Authentication failed', error);
      }
    );
  }
}
