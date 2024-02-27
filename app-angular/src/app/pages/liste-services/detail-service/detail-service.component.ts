import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/api-config';
import { AuthService } from 'src/app/components/navbar/auth.service';

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
  employees: any[];
  products: any[];

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.serviceId = params.get('id');
      this.serviceService.getServiceById(this.serviceId).subscribe(data => {
        this.service = data;
      });
    });

    this.http.get(API_BASE_URL + 'employe/byService/' + this.serviceId)
      .subscribe((response: any[]) => {
        this.employees = response;
      });
      
    this.http.get(API_BASE_URL + 'produitservice/get-all-produit/' + this.serviceId)
    .subscribe((response: any[]) => {
      this.products = response;
    });
  }

  updateEmployeeId(employeeId: string) {
    this.employee_id = employeeId;
  }

  addRendezVous() {
    const loggedInUser = this.auth.getLoggedInUser();
    const requestBody = {
      client_id: loggedInUser._id,
      employee_id: this.employee_id,
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
  
  handleImageError(event: any) {
    event.target.src = 'assets/img/services/services.jpg';
  }

}
