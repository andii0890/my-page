import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Output() changeLanguage = new EventEmitter();

  @Input() texts;
  @Input() currentLang;

  constructor() { }

  ngOnInit() {
  }

}
