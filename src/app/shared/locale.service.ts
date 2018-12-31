import { Injectable } from '@angular/core';
import { LanguagePack, LanguagePacks } from '../language-packs/locales';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {

    private headers: LanguagePack;
    locale = 'en';
    private currency = 'EUR';
    private backdrop: LanguagePack;

    public localeChanged = new Subject<any>();

    constructor() {
        this.backdrop = LanguagePacks['en'];
    }

    public setLocal = (s: string) => {
        this.locale = s;
        this.headers = LanguagePacks[this.locale];
        this.localeChanged.next();
    }
    public setCurrency = (s: string) => this.currency = s;
    public getCurrecy = () => this.currency;

    public getHeader = (s: string) => {
        if (!this.headers) {
            this.headers = LanguagePacks[this.locale];
        }
        return this.headers[s] || this.backdrop[s];
    }

}