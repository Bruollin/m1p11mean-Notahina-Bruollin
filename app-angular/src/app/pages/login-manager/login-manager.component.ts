import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerAuthService } from './manager-auth.service';
import { ManagerService } from 'src/app/components/navbar-manager/manager.service';
import { EmployeeService } from 'src/app/components/navbar-employee/employee.service';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {

  email: string = '';
  password: string = '';
  selectedRole: string = 'Manager';

  constructor(
    private authService: ManagerAuthService,
    private router: Router,
    private auth: ManagerService,
    private authEmployee: EmployeeService
  ) {}

  ngOnInit() {
    if (this.selectedRole === 'Manager') {
      this.email = 'koto@gmail.com';
      this.password = 'koto123';
    } else {
      this.email = 'nancie@gmail.com';
      this.password = 'nancie123';
    }
  }

  ngOnDestroy() {
  }

  signInOrNot(): void {
    if (this.selectedRole === 'Manager') {
      this.signIn(this.email, this.password);
    } else {
      this.signInEmployee(this.email, this.password);
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

  signInEmployee(email: string, password: string): void {
    this.authService.loginEmployee(email, password).subscribe(
      (response) => {
        this.authEmployee.setLoggedInEmployee(response.user);
        this.router.navigate(['/accueil-employee']);
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
