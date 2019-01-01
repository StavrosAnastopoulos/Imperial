import { TableInfoComponent } from './table/tableInfo.component';
import { PdfViewerComponent } from './pdf-renderer/pdf-viewer.component';
import { TableInfoPipe, TableHeaderPipe } from './table/tableInfo.pipe';
import { TextAreaComponent } from './text-area/text-area.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';
import { RenderingCanvasComponent } from './drawing-tools/rendering-canvas/rendering-canvas.component';
import { DrawingCanvasComponent } from './drawing-tools/drawing-canvas/drawing-canvas.component';
import { ColorPickerComponent } from './drawing-tools/color-picker/color-picker.component';
import { ColorPickerTriggerComponent } from './drawing-tools/color-picker/color-picker-trigger.component';

export const Pipes = [TableInfoPipe, TableHeaderPipe];

export const Components = [
    TextAreaComponent,
    TableInfoComponent,
    PdfViewerComponent,
    RenderingCanvasComponent,
    DrawingCanvasComponent,
    LanguagePickerComponent,
    ColorPickerComponent,
    ColorPickerTriggerComponent
];
