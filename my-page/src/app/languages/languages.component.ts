import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor() { }

  value = '';

  onNameChange(value: string) {
    //this.value = value;
    console.log(value)
	}

  ngOnInit() {
  }

}

