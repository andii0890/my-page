import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-languages',
    template: `
        `,
    styleUrls: ['./languages.component.css']
})

export class LanguagesComponent {

    selectedLanguage = 'es';

    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang(this.selectedLanguage);
        this.translateService.use(this.selectedLanguage);
    }

    toogleLanguage(lang: string) {
        this.translateService.use(lang);
    }
}

