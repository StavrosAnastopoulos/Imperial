import { Component } from '@angular/core';
import { ReportGenerationComponent } from '../report-generation/report-generation.component';

@Component({
    templateUrl: '../report-generation/report-generation.component.html',
    styleUrls: ['../report-generation/report-generation.component.scss']
})
export class DekraReportGenerationComponent extends ReportGenerationComponent {
    logoPath = 'assets/img/dekra-logo.jpg';
    logoDims = [400, 65];
    tableCss = 'dekra-table';
    checkboxCss = 'dekra-checkboxes';
}
