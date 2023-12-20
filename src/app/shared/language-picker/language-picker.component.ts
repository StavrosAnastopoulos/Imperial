import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Languages } from '../../language-packs/locales';

@Component({
    standalone: true,
    selector: 'imp-lang-picker',
    templateUrl: 'language-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgFor,
        MatMenuModule,
        MatIconModule,
    ]
})
export class LanguagePickerComponent {
    public languages = Languages;
    constructor(public translateService: TranslateService) {}
}
