import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import * as View from './index'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainViewRoutingModule } from "./mainView-router.module";
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BnNgPdfViewerModule } from 'bn-ng-pdf-viewer';
import { ColorPickerModule } from "./invoiceCheck/color-picker/color-picker.module";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, MainViewRoutingModule, 
        MatTableModule, MatCheckboxModule, BnNgPdfViewerModule, ColorPickerModule],
    declarations: [View.Components, View.Pipes],
    exports: [View.Components, View.Pipes]
})
export class MainViewModule {}