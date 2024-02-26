import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private loggedInEmployee: any;

  setLoggedInEmployee(user: any): void {
    this.loggedInEmployee = user;
  }

  getLoggedInEmployee(): any {
    return this.loggedInEmployee;
  }

  logout(): void {
    this.setLoggedInEmployee(null);
  }
}