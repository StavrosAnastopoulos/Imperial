import { Component, Input } from '@angular/core';
import { LocaleService } from 'src/app/shared/locale.service';

@Component({
    selector: 'client-info',
    templateUrl: 'clientInfo.component.html',
    styleUrls: ['clientInfo.component.scss']
})
export class ClientInfoComponent {
    @Input()
    additionalInfo = {};
    @Input()
    ownerInfo: any = {};
    @Input()
    dealerInfo: any = {};
    @Input()
    expertInfo: any = {};
    @Input()
    vehicleInfo: any = {};

    hide = [];

    constructor(public localeService: LocaleService) {
        for (let i = 0; i < 21; i++) {
            this.hide.push(false);
        }
    }
}
