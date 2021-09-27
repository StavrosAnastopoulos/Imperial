import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from '../../language-packs/locales';

@Component({
    selector: 'imp-lang-picker',
    templateUrl: 'language-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagePickerComponent {
    public languages = Languages;
    constructor(public translateService: TranslateService) {}
}
