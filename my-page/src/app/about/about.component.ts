import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() texts;
  skills = [
    {
      name: 'Javascript',
      level: '50%',
      data: [50, 50]
    },
    {
      name: 'Angular',
      level: '30%',
      data: [30, 70]
    },
    {
      name: 'HTML',
      level: '60%',
      data: [60, 40]
    },
    {
      name: 'CSS',
      level: '70%',
      data: [70, 30]
    },
    {
      name: 'Node.js',
      level: '20%',
      data: [10, 90]
    },
    {
      name: 'Typescript',
      level: '40%',
      data: [40, 60]
    },
    {
      name: 'Angular',
      level: '60%',
      data: [60, 40]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
