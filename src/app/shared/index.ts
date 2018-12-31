import { TableInfoComponent } from './table/tableInfo.component';
import { PdfViewerComponent } from './pdf-renderer/pdf-viewer.component';
import { RenderingCanvasComponent } from './canvas/rendering-canvas.component';
import { DrawingCanvasComponent } from './canvas/drawing-canvas.component';
import { TableInfoPipe, TableHeaderPipe } from './table/tableInfo.pipe';
import { TextAreaComponent } from './text-area/text-area.component';
import { LanguagePickerComponent } from './language-picker/language-picker.component';

export const Pipes = [TableInfoPipe, TableHeaderPipe];

export const Components = [
    TextAreaComponent,
    TableInfoComponent,
    PdfViewerComponent,
    RenderingCanvasComponent,
    DrawingCanvasComponent,
    LanguagePickerComponent
];