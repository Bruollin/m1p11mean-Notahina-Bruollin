// rendezvous.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/api-config';

@Injectable({
  providedIn: 'root',
})
export class HistoriqueService {
  private apiUrl = API_BASE_URL + 'rendezvous/client/';
  constructor(private http: HttpClient) {}

  getRendezvous(clientId: string): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+clientId);
  }
}
