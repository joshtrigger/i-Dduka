import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dateOfRegistration: String = '2018-09-04T14:39:27.007Z';
  today: Number = Date.now();

  constructor() {}

  ngOnInit() {
    this.findMe()
  }

  findMe() {
    navigator.geolocation.getCurrentPosition(position => {
      this.loc(position);
    });
  }

  showPosition(position){
    
  }

  loc(value) {
    console.log(value);
  }
}
