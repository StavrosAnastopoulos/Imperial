import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as Material from './material-index';
import * as Shared from './index';
import * as ColorPicker from './color-picker/index';
import { ColorPickerComponent } from './drawing-tools/color-picker/color-picker.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Material.Modules
    ],
    declarations: [
        Shared.Components,
        Shared.Pipes,
        ColorPicker.Directives,
        ColorPicker.Components
    ],
    exports: [
        CommonModule,
        FormsModule,
        Material.Modules,
        Shared.Components,
        Shared.Pipes,
        ColorPicker.Directives
    ],
    entryComponents: [
        ColorPicker.Components,
        ColorPickerComponent
    ]
})
export class SharedModule {}