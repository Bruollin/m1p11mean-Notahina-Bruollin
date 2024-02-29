import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/accueil-employee', title: 'Accueil',  icon: 'ni ni-app text-primary', class: '' },
    { path: '/profile-employee', title: 'Gestion de profil',  icon: 'ni ni-single-02 text-primary', class: '' }
];

@Component({
  selector: 'app-sidebar-employee',
  templateUrl: './sidebar-employee.component.html',
  styleUrls: ['./sidebar-employee.component.css']
})
export class SidebarEmployeeComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
