import { Component, OnInit } from '@angular/core';
import { ListeRendezvousService } from './liste-rendezvous.service';
import { EmployeeService } from 'src/app/components/navbar-employee/employee.service';

@Component({
  selector: 'app-liste-rendezvous',
  templateUrl: './liste-rendezvous.component.html',
  styleUrls: ['./liste-rendezvous.component.css']
})
export class ListeRendezvousComponent implements OnInit {

  rendezvousData: any[] = [];
  searchText: string = '';

  constructor(private rendezvousService: ListeRendezvousService, private auth: EmployeeService) {}

  ngOnInit(): void {
    const loggedInUser = this.auth.getLoggedInEmployee();
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
      appointment?.client_id?.firstname.toLowerCase().includes(this.searchText.toLowerCase()) ||
      appointment?.date_rendez_vous.includes(this.searchText) ||
      appointment?.heure_rendez_vous.includes(this.searchText)
    );
  }

}
