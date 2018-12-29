import { Component, Input } from '@angular/core';

@Component({
    selector: 'imp-report-title',
    templateUrl: 'report-title.component.html',
    styleUrls: ['report-title.component.scss']
})
export class ReportTitleComponent {
    @Input()
    imgPath: string;
    @Input()
    dims: [number, number];
    @Input()
    title: string;
}