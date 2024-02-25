import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerAuthService } from './manager-auth.service';
import { ManagerService } from 'src/app/components/navbar-manager/manager.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  email: string = '';
  password: string = '';
  selectedRole: string = 'Employe'; // Default role is Employé

  constructor(
    private authService: ManagerAuthService,
    private router: Router,
    private auth: ManagerService
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  signInOrNot(): void {
    if (this.selectedRole === 'Manager') {
      this.signIn(this.email, this.password);
    } else {
      this.notManagerSignIn(); 
    }
  }

  signIn(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (response) => {
        this.auth.setLoggedInManager(response.user);
        this.router.navigate(['/accueil-manager']);
      },
      (error) => {
        console.error('Authentication failed', error);
      }
    );
  }

  notManagerSignIn(): void {
    console.log('Not a manager');
  }
}
