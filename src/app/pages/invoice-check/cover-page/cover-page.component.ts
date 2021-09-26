import { Component } from '@angular/core';
import { InvoiceCheckService } from '../invoice-check.service';

@Component({
    selector: 'imp-cover-page',
    templateUrl: 'cover-page.component.html',
    styleUrls: ['cover-page.component.scss']
})
export class CoverPageComponent {
    constructor(public _service: InvoiceCheckService) {}
}
