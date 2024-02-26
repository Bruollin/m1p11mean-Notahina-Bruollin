import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/api-config';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthService {
  private apiUrl = API_BASE_URL + 'manager';
  private apiUrlEmployee = API_BASE_URL + 'employe';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  loginEmployee(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrlEmployee}/login`, { email, password });
  }
  
}
