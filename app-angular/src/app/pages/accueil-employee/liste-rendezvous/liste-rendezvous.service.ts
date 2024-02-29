// rendezvous.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/api-config';

@Injectable({
  providedIn: 'root',
})
export class ListeRendezvousService {
  private apiUrl = API_BASE_URL + 'rendezvous/employe/';
  constructor(private http: HttpClient) {}

  getRendezvous(employeeId: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + employeeId);
  }
}
