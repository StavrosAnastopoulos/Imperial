import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'imp-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
