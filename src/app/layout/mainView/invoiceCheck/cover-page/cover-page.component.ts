import { Component } from '@angular/core';
import { InvoiceCheckService } from '../invoice-check.service';
import { LocaleService } from 'src/app/shared/locale.service';

@Component({
    selector: 'imp-cover-page',
    templateUrl: 'cover-page.component.html',
    styleUrls: ['cover-page.component.scss']
})
export class CoverPageComponent {
    constructor(public _service: InvoiceCheckService, public localeService: LocaleService) {}
}
