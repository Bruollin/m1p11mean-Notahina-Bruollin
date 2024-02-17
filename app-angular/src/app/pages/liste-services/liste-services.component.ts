import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: ['./liste-services.component.css']
})
export class ListeServicesComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }
  services: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getServices().subscribe((data: any[]) => {
      this.services = data;
    });
  }

}
