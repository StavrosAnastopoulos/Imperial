import { Component, Input } from '@angular/core';

@Component({
    selector: 'imp-damage-card',
    templateUrl: 'damage-card.component.html',
    styleUrls: ['damage-card.component.scss']
})
export class DamageCardComponent {
    @Input() cssClass = '';
}
