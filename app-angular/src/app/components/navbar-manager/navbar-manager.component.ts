import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../sidebar-manager/sidebar-manager.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-navbar-manager',
  templateUrl: './navbar-manager.component.html',
  styleUrls: ['./navbar-manager.component.css']
})
export class NavbarManagerComponent implements OnInit {

  public focus;
  public listTitles: any[];
  public location: Location;
  loggedInUserName: string;
  constructor(location: Location, private router: Router, private auth: ManagerService) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    const loggedInUser = this.auth.getLoggedInManager();
    console.log('User : ', loggedInUser);
    this.loggedInUserName = loggedInUser ? (loggedInUser.firstname != undefined ? loggedInUser.firstname : '') + ' ' + (loggedInUser.lastname != undefined ? loggedInUser.lastname : '')  : '';
  }
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout(): void {
    
    this.auth.logout();
    
    this.router.navigate(['/login-manager']);
  }

}
