// authentication.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/utilisateurs';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // Make a POST request to your backend API for user authentication
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
}
