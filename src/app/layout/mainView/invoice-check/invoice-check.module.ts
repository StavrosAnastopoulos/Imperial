import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvoiceCheckComponent } from './invoice-check.component';
import { InvoiceCheckService } from './invoice-check.service';
import { InvoicePanelComponent } from './invoicePanel/invoicePanel.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { PdfViewerComponent } from './pdf-renderer/pdf-viewer.component';
import { RenderingCanvasComponent } from './canvas/rendering-canvas.component';
import { DrawingCanvasComponent } from './canvas/drawing-canvas.component';
import * as ColorPicker from './color-picker';

const routes: Routes = [
    {
        path: '',
        component: InvoiceCheckComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}

@NgModule({
    imports: [SharedModule, RoutingModule],
    declarations: [
        InvoiceCheckComponent,
        InvoicePanelComponent,
        CoverPageComponent,
        BottomSheetComponent,
        PdfViewerComponent,
        RenderingCanvasComponent,
        DrawingCanvasComponent,
        ColorPicker.Directives,
        ColorPicker.Components
    ],
    providers: [
        InvoiceCheckService,
        ColorPicker.Services
    ],
    entryComponents: [
        ColorPicker.Components
    ]
})
export class InvoiceCheckModule {}