import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = {
    language: 'EN/ES',
    greeting: 'Hi.',
    greeting2: 'I\'m Andrea',
    description: 'Trainee Developer Engineer actually working in Unosquare.',
    link: 'Please show me what are you working on.'
  };

  constructor() { }

  ngOnInit() {
  }

}
