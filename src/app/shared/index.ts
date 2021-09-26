import { TableInfoComponent } from './table/tableInfo.component';
import { PrecisionPipe, VehicleTypePipe } from './table/tableInfo.pipe';
import { TextAreaComponent } from './text-area/text-area.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { ReportTitleComponent } from './title/report-title.component';
import { DamageCardComponent } from './damage-card/damage-card.component';
import { ClientInfoComponent } from './client-info/client-info.component';

export const Pipes = [
    VehicleTypePipe,
    PrecisionPipe
];

export const Components = [
    TextAreaComponent,
    TableInfoComponent,
    LanguagePickerComponent,
    ReportTitleComponent, 
    DamageCardComponent,
    ClientInfoComponent
];
