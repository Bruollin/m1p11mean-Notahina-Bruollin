import { Routes } from '@angular/router';

import { AccueilManagerComponent } from 'src/app/pages/accueil-manager/accueil-manager.component';
import { ListeEmployeComponent } from 'src/app/pages/accueil-manager/liste-employe/liste-employe.component';

export const ManagerLayoutRoutes: Routes = [
    { path: 'accueil-manager',         component: AccueilManagerComponent }
];
