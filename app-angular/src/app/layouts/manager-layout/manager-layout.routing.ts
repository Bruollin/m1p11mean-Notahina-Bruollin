import { Routes } from '@angular/router';

import { AccueilManagerComponent } from 'src/app/pages/accueil-manager/accueil-manager.component';
import { StatistiquesGraphComponent } from 'src/app/pages/accueil-manager/statistiques-graph/statistiques-graph.component';
import { StatistiquesComponent } from 'src/app/pages/accueil-manager/statistiques/statistiques.component';

export const ManagerLayoutRoutes: Routes = [
    { path: 'accueil-manager',         component: AccueilManagerComponent },
    { path: 'statistiques',         component: StatistiquesComponent },
    { path: 'statistiques-graph',         component: StatistiquesGraphComponent }
];
