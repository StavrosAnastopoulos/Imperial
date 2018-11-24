import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import * as View from './index'
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MainViewRoutingModule } from "./mainView-router.module";
import { PdfViewerModule } from "ng2-pdf-viewer";
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, MainViewRoutingModule, 
        PdfViewerModule, MatTableModule],
    declarations: [View.Components],
    exports: [View.Components]
})
export class MainViewModule {}