import { Component, Input, ViewChild, ElementRef } from '@angular/core';

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

    hide = []

    constructor() {
        for (let i = 0; i < 21; i++) {
            this.hide.push(false);
        }
    }

    public textAreaAdjust(id: number) {
        const textArea = document.getElementById('textarea'+id);
        textArea.style.height = '1px';
        textArea.style.height = (textArea.scrollHeight)+'px';
    }

}