import { Injectable } from '@angular/core';
import { LanguagePack, LanguagePacks } from '../language-packs/locales';

@Injectable({
    providedIn: 'root'
})
export class LocaleService {

    private headers: LanguagePack;
    private locale = 'en';
    private currency = 'EUR';
    private backdrop: LanguagePack;

    constructor() {
        this.backdrop = LanguagePacks['en'];
    }

    public setLocal = (s: string) => {
        this.locale = s;
        this.headers = LanguagePacks[this.locale];
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