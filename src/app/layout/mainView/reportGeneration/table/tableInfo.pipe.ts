import { Pipe, PipeTransform } from "@angular/core";
import { LocaleService } from "../locale.service";

@Pipe({
    name: 'convert'
})
export class TableInfoPipe implements PipeTransform {
    constructor(private localeService: LocaleService){}

    transform(value: string) {
        if (!value) return '-';
        if (typeof(value) == 'string'){
            const parts = value.split(' | ');
            if (parts.length == 2){
                if (parts[1] == 'header') {
                    return this.localeService.getHeader(parts[0]);
                }
            }
        }
        if(!isNaN(+value)) return parseFloat(value).toFixed(2);
        return value;
    }

}