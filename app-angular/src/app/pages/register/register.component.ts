import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  num_phone: string;
  address: string;
  gender: string;

  // constructor() { }
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
  }
   
  onSubmit() {
    const formData = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      num_phone: this.num_phone,
      address: this.address,
      gender: this.gender
    };

    this.http.post<any>('http://localhost:3000/utilisateurs/ajout', formData)
      .subscribe(
        response => {
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Erreur lors de l\'inscription : ', error);
        }
      );
  }


}
