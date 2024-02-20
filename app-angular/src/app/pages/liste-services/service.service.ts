import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/api-config';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private apiUrl = API_BASE_URL + 'services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getServiceById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
