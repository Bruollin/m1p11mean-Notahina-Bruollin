import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/api-config';
import { StatistiquesService } from './statistiques.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  employeeData: any[] = [];
  reservationsParJour: any = {};
  reservationsParMois: any = {};
  chiffreAffairesParJour: any = {};
  chiffreAffairesParMois: any = {};

  constructor(private http: HttpClient, private reservationService: StatistiquesService) { }

  ngOnInit(): void {
    this.fetchData();
    this.loadReservationStats();
    this.loadChiffreAffaires();
  }

  fetchData() {
    const apiUrl = API_BASE_URL + 'rendezvous/statDureeMoyenne';

    this.http.post(apiUrl, {}).subscribe((data: any) => {
      this.processData(data);
    });
  }

  processData(data: any) {
    this.employeeData = [];

    for (const [employee, hours] of Object.entries(data.dureeMoyenneDeTravailParEmployee)) {
      this.employeeData.push({ employee, hours });
    }
  }
  loadReservationStats() {
    this.reservationService.getReservationStats().subscribe(data => {
      this.reservationsParJour = data.reservationsParJour;
      this.reservationsParMois = data.reservationsParMois;
    });
  }

  getDates(obj: any): string[] {
    return Object.keys(obj);
  }

  getMonths(obj: any): string[] {
    return Object.keys(obj);
  }
  
  loadChiffreAffaires() {
    this.reservationService.getChiffreAffairesStats().subscribe(data => {
      this.chiffreAffairesParJour = data.chiffreAffairesParJour;
      this.chiffreAffairesParMois = data.chiffreAffairesParMois;
    });
  }

  getEntries(obj: any): any[] {
    return Object.entries(obj);
  }
}
