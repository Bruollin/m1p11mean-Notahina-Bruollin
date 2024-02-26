import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarManagerComponent } from './sidebar-manager/sidebar-manager.component';
import { NavbarManagerComponent } from './navbar-manager/navbar-manager.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { SidebarEmployeeComponent } from './sidebar-employee/sidebar-employee.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarManagerComponent,
    NavbarManagerComponent,
    NavbarEmployeeComponent,
    SidebarEmployeeComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarManagerComponent,
    NavbarManagerComponent,
    NavbarEmployeeComponent,
    SidebarEmployeeComponent
  ]
})
export class ComponentsModule { }
