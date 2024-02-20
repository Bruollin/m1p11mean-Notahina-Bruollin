import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/api-config';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }
  constructor(private http: HttpClient) { }

  validerRendezVous(date: string, heure: string): void {
    const client_id = "65c51111792fdbe360c5086d";
    const employee_id = "65c51111792fdbe360c5086d";
    const service_id = "65cba3b63930435020bec0c7";
    const etat = 1;

    const requestBody = {
      client_id,
      employee_id,
      service_id,
      date_rendez_vous: date,
      heure_rendez_vous: heure,
      etat
    };

    this.http.post(API_BASE_URL + 'rendezvous', requestBody)
      .subscribe(response => {
        console.log('Rendez-vous ajouté avec succès!', response);
      }, error => {
        console.error('Erreur lors de l\'ajout du rendez-vous', error);
      });
  }

}
