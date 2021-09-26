import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImperialDataProcessingService } from '../report-generation/imperial-data-processing.service';
import { ReportGenerationComponent } from '../report-generation/report-generation.component';
import { ImageFileService } from '../../shared/imageFiles.service';

@Component({
    templateUrl: '../report-generation/report-generation.component.html',
    styleUrls: ['../report-generation/report-generation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ImperialDataProcessingService, ImageFileService]
})
export class DekraReportGenerationComponent extends ReportGenerationComponent {
    public logoPath: string = 'assets/img/dekra-logo.jpg';
    public logoDims: [number, number] = [400, 65];
    public tableCss: string = 'dekra-table';
    public checkboxCss: string = 'dekra-checkboxes';
}
