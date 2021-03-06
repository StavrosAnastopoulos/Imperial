import { TableInfoComponent } from './table/tableInfo.component';
import { TableInfoPipe, TableHeaderPipe, VehicleTypePipe } from './table/tableInfo.pipe';
import { TextAreaComponent } from './text-area/text-area.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { ReportTitleComponent } from './title/report-title.component';
import { ImageFileService } from './imageFiles.service';
import { LocaleService } from './locale.service';
import { ClientInfoComponent } from './clientInfo/clientInfo.component';
import { DamageCardComponent } from './damageCard/damage-card.component';

export const Pipes = [
    TableInfoPipe,
    TableHeaderPipe,
    VehicleTypePipe
];

export const Components = [
    TextAreaComponent,
    TableInfoComponent,
    LanguagePickerComponent,
    ReportTitleComponent, ClientInfoComponent, DamageCardComponent
];

export const Services = [
    ImageFileService,
    LocaleService
];