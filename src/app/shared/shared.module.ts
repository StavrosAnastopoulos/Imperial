import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as Material from './material-index';
import * as Shared from './index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        Material.Modules
    ],
    declarations: [
        Shared.Components,
        Shared.Pipes,
    ],
    providers : [Shared.Services],
    exports: [
        CommonModule,
        FormsModule,
        Material.Modules,
        Shared.Components,
        Shared.Pipes,
    ]
})
export class SharedModule {}