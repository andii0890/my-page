import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-page';

  currentLang = 'ES';

  english = {
    profile:
    {
      greeting: 'Hi.',
      greeting2: 'I\'m Andrea',
      description: 'Trainee Developer Engineer actually working in Unosquare.',
      link: 'Please show me what are you working on.'
      }
  };

  spanish = {
    profile:
    {
      greeting: 'Hola.',
      greeting2: 'Soy Andrea',
      description: 'Desarrolladora Software Trainee trabajando actualmente en Unosquare.',
      link: 'Por favor, muéstrame en qué estás trabajando.'
      }
  };

  texts = this.spanish;

  onLanguageChange() {
    if(this.currentLang === 'ES') {
      this.currentLang = 'EN';
      this.texts = this.english;
    } else {
      this.currentLang = 'ES';
      this.texts = this.spanish;
    }
  }
}


