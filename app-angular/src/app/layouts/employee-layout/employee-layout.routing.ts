import { Routes } from '@angular/router';
import { AccueilEmployeeComponent } from 'src/app/pages/accueil-employee/accueil-employee.component';
import { ProfileEmployeeComponent } from 'src/app/pages/accueil-employee/profile-employee/profile-employee.component';

export const EmployeeLayoutRoutes: Routes = [
    { path: 'accueil-employee',         component: AccueilEmployeeComponent },
    { path: 'profile-employee',         component: ProfileEmployeeComponent }
];
