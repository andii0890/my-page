import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  alternate = true;
  toggle = false;

  @Input() texts;

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(e) {
    e.stopPropagation();
  }

}
