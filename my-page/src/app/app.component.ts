import { Component } from '@angular/core';
import langSpan from '../assets/i18n/es.json';
import langEng from '../assets/i18n/en.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-page';

  currentLang = 'ES';

  // english: any = JSON.parse(langSpan);
  spanish = langSpan;

  texts = ( <any>langSpan ).profile;

  constructor() {
    console.log(this.texts);
  }

  onLanguageChange() {
    console.log(this.texts);
    if (this.currentLang === 'ES') {
      this.currentLang = 'EN';
      // this.texts = this.english;
    } else {
      this.currentLang = 'ES';
      this.texts = this.spanish;
    }
  }
}


