import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import * as View from './index'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainViewRoutingModule } from "./mainView-router.module";
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BnNgPdfViewerModule } from 'bn-ng-pdf-viewer';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, MainViewRoutingModule, 
        MatTableModule, MatCheckboxModule, BnNgPdfViewerModule],
    declarations: [View.Components, View.Pipes],
    exports: [View.Components, View.Pipes]
})
export class MainViewModule {}