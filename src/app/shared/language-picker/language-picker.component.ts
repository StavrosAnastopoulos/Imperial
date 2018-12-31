import { Component } from '@angular/core';
import { LocaleService } from '../locale.service';
import { Languages } from 'src/app/language-packs/locales';

@Component({
    selector: 'imp-lang-picker',
    templateUrl: 'language-picker.component.html'
})
export class LanguagePickerComponent {
    public languages = Languages;
    constructor(public _localService: LocaleService) {}
}
