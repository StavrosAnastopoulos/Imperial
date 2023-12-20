import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ImageFileService } from 'src/app/shared/imageFiles.service';
import { TableInfoComponent } from 'src/app/shared/table/tableInfo.component';
import { ReportTitleComponent } from 'src/app/shared/title/report-title.component';
import { DamageCardComponent } from 'src/app/shared/damage-card/damage-card.component';
import { ClientInfoComponent } from 'src/app/shared/client-info/client-info.component';
import { LanguagePickerComponent } from 'src/app/shared/language-picker/language-picker.component';
import { ReportGenerationComponent } from '../report-generation/report-generation.component';
import { ImperialDataProcessingService } from '../report-generation/imperial-data-processing.service';

@Component({
    standalone: true,
    templateUrl: '../report-generation/report-generation.component.html',
    styleUrls: ['../report-generation/report-generation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ImperialDataProcessingService, ImageFileService],
    imports: [
        NgIf,
        NgFor,
        RouterModule,
        MatIconModule,
        TableInfoComponent,
        ClientInfoComponent,
        DamageCardComponent,
        ReportTitleComponent,
        LanguagePickerComponent,
    ]
})
export class AvusReportGenerationComponent extends ReportGenerationComponent {
    public logoPath: string = 'assets/img/avus-logo.jpg';
    public logoDims: [number, number] = [400, 65];
    public tableCss: string = 'avus-table';
    public checkboxCss: string = 'avus-checkboxes';
}
