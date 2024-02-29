import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/api-config';

@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent implements OnInit {

 employees: any[] = [];
 loading = true;

 constructor(private httpClient: HttpClient) { }

 ngOnInit(): void {
   this.httpClient.get<any[]>(API_BASE_URL + 'employe').subscribe(
     data => {
       this.employees = data;
       this.loading = false;
     },
     error => {
       console.error('Erreur lors de la récupération des données :', error);
       this.loading = false;
     }
   );
 }

 generateStars(preferences: number): string {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const starClass = i <= preferences ? 'text-warning' : 'text-muted';
    stars += `<i class="fas fa-star ${starClass}"></i>`;
  }
  return stars;
}

 formatDate(dateString: string): string {
   const date = new Date(dateString);
   const day = date.getDate().toString().padStart(2, '0');
   const month = (date.getMonth() + 1).toString().padStart(2, '0');
   const year = date.getFullYear();
   return `${day}/${month}/${year}`;
 }

}
