import { Pipe, PipeTransform } from "@angular/core";
import { LocaleService } from "../locale.service";

@Pipe({
    name: 'convert'
})
export class TableInfoPipe implements PipeTransform {
    constructor(private localeService: LocaleService){}

    transform(value: string) {
        if (!value) {
             return '-';
        }
        if (typeof(value) == 'string'){
            const parts = value.split(' | ');
            if (parts.length == 2){
                if (parts[1] == 'header') {
                    return new TableHeaderPipe(this.localeService).transform(parts[0]);
                }
            }
        }
        if (!isNaN(+value)) {
            return parseFloat(value).toFixed(2);
        }
        return value;
    }

}

const priceHeaders = ['ValueTotalCorrected', 'TotalNetCosts',  'TotalVAT', 'TotalGrossCosts']

@Pipe({
    name: 'header'
})
export class TableHeaderPipe implements PipeTransform {
    constructor(private localeService: LocaleService){}

    transform(value: string) {
        return priceHeaders.indexOf(value) > -1
            ? this.localeService.getHeader(value) + ' /' + this.localeService.getCurrecy()
            : this.localeService.getHeader(value);
    }

}
