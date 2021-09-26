import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'precision' })
export class PrecisionPipe implements PipeTransform {
    transform(value: number | string | null, floatingPoints: number = 2, nullValue: string = '-') {
        if (typeof(value) == 'string'){
            if (!isNaN(+value)) {
                return parseFloat(value).toFixed(floatingPoints);
            } else {
                return value;
            }
        } else if (typeof(value) == 'number') {
            return value.toFixed(floatingPoints)
        } else {
            return '-';
        }
    }
}

const priceHeaders = ['ValueTotalCorrected', 'TotalNetCosts',  'TotalVAT', 'TotalGrossCosts']

// @Pipe({
//     name: 'header'
// })
// export class TableHeaderPipe implements PipeTransform {
//     constructor(private localeService: LocaleService){}

//     // extra param to trigger change detection
//     transform(value: string, local: string = this.localeService.locale) {
//         return priceHeaders.indexOf(value) > -1
//             ? this.localeService.getHeader(value) + ' /' + this.localeService.getCurrecy()
//             : this.localeService.getHeader(value);
//     }
// }

@Pipe({ name: 'vehicleType' })
export class VehicleTypePipe implements PipeTransform {
    private vehicleType = {
        '1': 'car',
        '3': 'motorcycle',
        '4': 'truck'
    };

    transform(value: string) {
        return this.vehicleType[value];
    }

}
