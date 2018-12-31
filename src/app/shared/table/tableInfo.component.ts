import { Component, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { TableData } from './table-split.service';
import { Subscription } from 'rxjs';
import { LocaleService } from '../locale.service';

@Component({
    selector: 'imp-table-info',
    templateUrl: 'tableInfo.component.html',
    styleUrls : ['tableInfo.component.scss']
})
export class TableInfoComponent implements OnDestroy {
    @Input() data: TableData;

    private subscription: Subscription;

    constructor(private changeDetectorRef: ChangeDetectorRef, public localeService: LocaleService) {
        this.subscription = this.localeService.localeChanged.subscribe(() => this.changeDetectorRef.markForCheck());
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
