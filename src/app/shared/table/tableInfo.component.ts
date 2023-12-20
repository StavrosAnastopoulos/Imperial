import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { TableData } from './table-split.service';
import { PrecisionPipe } from './tableInfo.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    standalone: true,
    selector: 'imp-table-info',
    templateUrl: 'tableInfo.component.html',
    styleUrls : ['tableInfo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf,
        NgFor,
        NgClass,
        AsyncPipe,
        TranslateModule,
        PrecisionPipe,
    ]
})
export class TableInfoComponent {
    @Input() data: TableData | null = null;
    @Input() cssClass = '';
}
