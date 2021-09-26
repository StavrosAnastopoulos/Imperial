import { Component, Input } from '@angular/core';
import { VehicleTypePipe } from '../table/tableInfo.pipe';

@Component({
    selector: 'imp-client-info',
    templateUrl: 'client-info.component.html',
    styleUrls: ['client-info.component.scss'],
    providers: [VehicleTypePipe],
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

    hide: boolean[] = [];

    constructor() {
        for (let i = 0; i < 21; i++) {
            this.hide.push(false);
        }
    }
}
