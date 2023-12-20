import { Component, Input } from '@angular/core';
import { VehicleTypePipe } from '../table/tableInfo.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextAreaComponent } from '../text-area/text-area.component';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'imp-client-info',
    templateUrl: 'client-info.component.html',
    styleUrls: ['client-info.component.scss'],
    imports: [
        NgClass,
        DatePipe,
        FormsModule,
        MatCheckboxModule,
        TranslateModule,
        VehicleTypePipe,
        TextAreaComponent,
    ],
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
