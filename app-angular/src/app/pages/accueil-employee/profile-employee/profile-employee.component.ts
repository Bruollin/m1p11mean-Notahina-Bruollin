import { Component, OnInit } from '@angular/core';
import { API_BASE_URL } from 'src/app/api-config';
import { EmployeeService } from 'src/app/components/navbar-employee/employee.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-employee',
  templateUrl: './profile-employee.component.html',
  styleUrls: ['./profile-employee.component.css']
})
export class ProfileEmployeeComponent implements OnInit {

  loggedInUser : any;
  constructor(private http: HttpClient, private auth: EmployeeService) {}

  ngOnInit(): void {
    this.loggedInUser = this.auth.getLoggedInEmployee();
  }
  updateUserData(): void {
    const userId = this.loggedInUser._id;
    const updatedUserData = {
      firstname: this.loggedInUser.firstname,
      lastname: this.loggedInUser.lastname,
      email: this.loggedInUser.email,
      num_phone: this.loggedInUser.num_phone,
      address: this.loggedInUser.address
    };

    this.http.put<any>(API_BASE_URL+'employe/'+userId, updatedUserData)
      .subscribe(
        response => {
          console.log('User data updated successfully:', response);
        },
        error => {
          console.error('Error updating user data:', error);
        }
      );
  }

}
