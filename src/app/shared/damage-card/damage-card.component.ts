import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    standalone: true,
    selector: 'imp-damage-card',
    templateUrl: 'damage-card.component.html',
    styleUrls: ['damage-card.component.scss'],
    imports: [
        NgClass,
        MatCheckboxModule
    ]
})
export class DamageCardComponent {
    @Input() cssClass = '';
}
