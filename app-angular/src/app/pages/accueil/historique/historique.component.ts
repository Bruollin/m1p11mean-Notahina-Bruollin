import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from './historique.service';
import { AuthService } from 'src/app/components/navbar/auth.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  rendezvousData: any[] = [];
  searchText: string = '';

  constructor(private rendezvousService: HistoriqueService, private auth: AuthService) {}

  ngOnInit(): void {
    const loggedInUser = this.auth.getLoggedInUser();
    this.loadRendezvousData(loggedInUser?._id);
  }

  loadRendezvousData(userId: string): void {
    this.rendezvousService.getRendezvous(userId).subscribe(
      (data) => {
        this.rendezvousData = data;
      },
      (error) => {
        console.error('Error fetching rendezvous data:', error);
      }
    );
  }
  filterAppointments(): any[] {
    if (!this.searchText) {
      return this.rendezvousData;
    }

    return this.rendezvousData.filter(appointment =>
      appointment?.service_id?.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      appointment?.employe_id?.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      appointment?.date_rendez_vous.includes(this.searchText) ||
      appointment?.heure_rendez_vous.includes(this.searchText)
    );
  }
}
