import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/api-config';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent implements OnInit {

  serviceId: string;
  service: any;
  client_id: string;
  employee_id: string;
  service_id: string;
  date_rendez_vous: string;
  heure_rendez_vous: string;
  etat: boolean;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id');
      this.serviceService.getServiceById(this.serviceId).subscribe(data => {
        this.service = data;
      });
    });
  }
  
  addRendezVous() {
    const requestBody = {
      client_id: "65c51111792fdbe360c5086d",
      employee_id: "65c51111792fdbe360c5086d",
      service_id: this.serviceId,
      date_rendez_vous: this.date_rendez_vous,
      heure_rendez_vous: this.heure_rendez_vous,
      etat: 1,
    };

    this.http.post(API_BASE_URL + 'rendezvous', requestBody).subscribe(
      (response) => {
        console.log('Rendez-vous ajouté avec succès!', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout du rendez-vous", error);
      }
    );
  }

}
