import { Injectable } from "@angular/core";
import { LanguagePack, LanguagePacks } from "./locales";

@Injectable({
    providedIn: 'root'
})
export class LocaleService {

    headers: LanguagePack;
    private locale: string = 'en';
    private currency: string = 'en';
    
    constructor() {
    }

    public setLocal = (s: string) => {
        this.locale = s;
        this.headers = LanguagePacks[this.locale];
    }
    public setCurrency = (s: string) => this.currency = s;

    public getHeader = (s: string) => {
        if(!this.headers) this.headers = LanguagePacks[this.locale];
        return this.headers[s];
    }

}