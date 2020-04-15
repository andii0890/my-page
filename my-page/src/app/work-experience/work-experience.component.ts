import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../work_experience';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience: WorkExperience = {
  title: 'Work experience',
  company1: 'Unosquare',
  job_position1: 'Trainee Software Developer',
  date1: 'Ene 2020 - Actualmente',
  description1: '',

  company2: 'Maskot',
  job_position2: 'Trainee Software Developer',
  date: 'Ene 2020 - Now',
  description2:  '',

  company3: 'Other',
  job_position3: 'Trainee Software Developer',
  date2: 'Ene 2020 - Now',
  description3: '',
  }

  constructor() { }

  ngOnInit() {
  }

}
