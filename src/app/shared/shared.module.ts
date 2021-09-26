import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as Material from './material-index';
import * as Shared from './index';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        Material.Modules
    ],
    declarations: [
        Shared.Components,
        Shared.Pipes,
    ],
    exports: [
        CommonModule,
        FormsModule,
        Material.Modules,
        Shared.Components,
        Shared.Pipes,
    ]
})
export class SharedModule {}