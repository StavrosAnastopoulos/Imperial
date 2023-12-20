import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'imp-report-title',
    templateUrl: 'report-title.component.html',
    styleUrls: ['report-title.component.scss'],
    imports: [
        TranslateModule,
    ]
})
export class ReportTitleComponent {
    @Input() imgPath: string = '';
    @Input() dims: [number, number] = [0, 0];
    @Input() title: string = '';
}
