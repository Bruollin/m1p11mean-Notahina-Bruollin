import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private loggedInManager: any;

  setLoggedInManager(user: any): void {
    this.loggedInManager = user;
  }

  getLoggedInManager(): any {
    return this.loggedInManager;
  }

  logout(): void {
    this.setLoggedInManager(null);
  }
}