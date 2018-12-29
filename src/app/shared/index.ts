import { TableInfoComponent } from './table/tableInfo.component';
import { PdfViewerComponent } from './pdf-renderer/pdf-viewer.component';
import { RenderingCanvasComponent } from './canvas/rendering-canvas.component';
import { DrawingCanvasComponent } from './canvas/drawing-canvas.component';
import { TableInfoPipe, TableHeaderPipe } from './table/tableInfo.pipe';

export const Pipes = [TableInfoPipe, TableHeaderPipe];

export const Components = [
    TableInfoComponent,
    PdfViewerComponent,
    RenderingCanvasComponent,
    DrawingCanvasComponent
];