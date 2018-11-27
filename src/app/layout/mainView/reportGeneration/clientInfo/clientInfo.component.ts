import { Component, Input } from "@angular/core";

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

    constructor() {}
}