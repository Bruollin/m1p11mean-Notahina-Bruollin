import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any;

  setLoggedInUser(user: any): void {
    this.loggedInUser = user;
  }

  getLoggedInUser(): any {
    return this.loggedInUser;
  }
}