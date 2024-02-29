import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_BASE_URL } from 'src/app/api-config';
import { AuthService } from 'src/app/components/navbar/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  loggedInUser : any;
  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit(): void {
    this.loggedInUser = this.auth.getLoggedInUser();
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

    this.http.put<any>(API_BASE_URL+'utilisateurs/'+userId, updatedUserData)
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
