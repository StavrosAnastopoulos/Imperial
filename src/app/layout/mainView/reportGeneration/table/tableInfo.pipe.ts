import { Pipe, PipeTransform } from "@angular/core";
import { LanguagePacks } from "../locales";

@Pipe({
    name: 'convert'
})
export class TableInfoPipe implements PipeTransform {
    constructor(){}

    transform(value: string, locale: string = 'en') {
        if (!value) return '-';
        if (typeof(value) == 'string'){
            const parts = value.split(' | ');
            if (parts.length == 2){
                if (parts[1] == 'header') {
                    return LanguagePacks[locale][parts[0]];
                }
            }
        }
        if(!isNaN(+value)) return parseFloat(value).toFixed(2);
        return value;
    }

}