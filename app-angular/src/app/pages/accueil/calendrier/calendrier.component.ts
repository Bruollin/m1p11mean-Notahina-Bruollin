import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    // Remplacez ces valeurs par celles que vous obtenez de la sélection de l'utilisateur
    const client_id = "65c51111792fdbe360c5086d";
    const employee_id = "65c51111792fdbe360c5086d";
    const service_id = "65cba3b63930435020bec0c7";
    const etat = 1;

    // Construisez l'objet à envoyer dans le corps de la requête
    const requestBody = {
      client_id,
      employee_id,
      service_id,
      date_rendez_vous: date,
      heure_rendez_vous: heure,
      etat
    };

    // Envoyez la requête POST à l'API
    this.http.post('http://localhost:3000/rendezvous', requestBody)
      .subscribe(response => {
        console.log('Rendez-vous ajouté avec succès!', response);
        // Réinitialisez les champs du formulaire ou effectuez d'autres actions si nécessaire
      }, error => {
        console.error('Erreur lors de l\'ajout du rendez-vous', error);
      });
  }

}
