import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { ManagerLayoutRoutes } from './manager-layout.routing';
import { AccueilManagerComponent } from 'src/app/pages/accueil-manager/accueil-manager.component';
import { ListeEmployeComponent } from 'src/app/pages/accueil-manager/liste-employe/liste-employe.component';
import { StatistiquesComponent } from 'src/app/pages/accueil-manager/statistiques/statistiques.component';
import { StatistiquesGraphComponent } from 'src/app/pages/accueil-manager/statistiques-graph/statistiques-graph.component';

@NgModule({
  imports: [
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(ManagerLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    AccueilManagerComponent,
    ListeEmployeComponent,
    StatistiquesComponent,
    StatistiquesGraphComponent
  ]
})

export class ManagerLayoutModule {}
