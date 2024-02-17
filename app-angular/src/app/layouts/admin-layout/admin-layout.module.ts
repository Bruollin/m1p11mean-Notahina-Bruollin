import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListeServicesComponent } from 'src/app/pages/liste-services/liste-services.component';
import { CalendrierComponent } from 'src/app/pages/accueil/calendrier/calendrier.component';
import { HistoriqueComponent } from 'src/app/pages/accueil/historique/historique.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailServiceComponent } from 'src/app/pages/liste-services/detail-service/detail-service.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    MatDialogModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    AccueilComponent,
    ListeServicesComponent,
    DetailServiceComponent,
    CalendrierComponent,
    HistoriqueComponent
  ]
})

export class AdminLayoutModule {}
