import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../work_experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: WorkExperience = {

  };



  constructor() { }

  ngOnInit() {
  }

}
