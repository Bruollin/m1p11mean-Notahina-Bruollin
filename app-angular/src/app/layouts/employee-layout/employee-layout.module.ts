import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { EmployeeLayoutRoutes } from './employee-layout.routing';
import { AccueilEmployeeComponent } from 'src/app/pages/accueil-employee/accueil-employee.component';
import { ListeRendezvousComponent } from 'src/app/pages/accueil-employee/liste-rendezvous/liste-rendezvous.component';

@NgModule({
  imports: [
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(EmployeeLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    AccueilEmployeeComponent,
    ListeRendezvousComponent
  ]
})

export class EmployeeLayoutModule {}
