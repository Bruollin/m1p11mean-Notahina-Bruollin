import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private loggedInUser: any;

  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }

  logout(): void {
    this.setLoggedInUser(null);
  }
}