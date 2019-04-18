import { Component, Input } from '@angular/core';
import { LocaleService } from 'src/app/shared/locale.service';

@Component({
    selector: 'imp-report-title',
    templateUrl: 'report-title.component.html',
    styleUrls: ['report-title.component.scss']
})
export class ReportTitleComponent {
    @Input() imgPath: string;
    @Input() dims: [number, number];
    @Input() title: string;

    constructor(public localeService: LocaleService) {}
}
