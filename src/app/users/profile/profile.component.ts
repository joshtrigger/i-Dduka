import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/shared/http.service';
import { AppConfig } from 'src/app/config';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: String;
  location: String;
  profilePic: String;
  coverPhoto: String;
  email: String;
  phone: String;
  DOR: String;

  constructor(private httpService: HttpService, private store: Store<any>) {}

  ngOnInit() {
    this.getCurrentUserProfile();
  }

  getCurrentUserProfile() {
    this.httpService.get(`${AppConfig.BASE_URL}/profile/user`).subscribe(
      value => {
        this.store.dispatch({
          type: 'CURRENT_USER_PROFILE',
          payload: value
        });
        this.store.pipe(select('users')).subscribe(profile => {
          const {
            currentUser: { user }
          } = profile;
          const { name, location, pictures, phone, login, email } = user;
          this.name = `${name.first} ${name.middle} ${name.last}`;
          this.location = `${location.city}, ${location.country}`;
          this.email = email;
          this.phone = phone;
          this.profilePic = pictures.profilePic;
          this.coverPhoto = pictures.coverPhoto;
          this.DOR = login.dateOfRegistration;
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
