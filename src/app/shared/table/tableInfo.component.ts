import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableData } from './table-split.service';

@Component({
    selector: 'imp-table-info',
    templateUrl: 'tableInfo.component.html',
    styleUrls : ['tableInfo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableInfoComponent {
    @Input() data: TableData | null = null;
    @Input() cssClass = '';
}
