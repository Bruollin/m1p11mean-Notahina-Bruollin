import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/api-config';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  private apiUrl = API_BASE_URL + 'rendezvous/statReservation';
  private apiUrlAffaire = API_BASE_URL + 'rendezvous/statChiffreAffaire';

  constructor(private http: HttpClient) { }

  getReservationStats(): Observable<any> {
    return this.http.post<any>(this.apiUrl, {});
  }

  getChiffreAffairesStats(): Observable<any> {
    return this.http.post<any>(this.apiUrlAffaire, {});
  }
}
