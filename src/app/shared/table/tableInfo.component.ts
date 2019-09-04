import { Component, Input } from '@angular/core';
import { TableData } from './table-split.service';
import { LocaleService } from '../locale.service';

@Component({
    selector: 'imp-table-info',
    templateUrl: 'tableInfo.component.html',
    styleUrls : ['tableInfo.component.scss']
})
export class TableInfoComponent {
    @Input() data: TableData;
    @Input() cssClass = '';

    constructor(public localeService: LocaleService) {}

}
