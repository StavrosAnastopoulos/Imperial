import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { DrawingCanvasService } from '../../pages/invoice-check/canvas/drawing-canvas.service';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { InvoiceCheckService } from './invoice-check.service';

@Component({
templateUrl: 'invoice-check.component.html',
styleUrls: ['invoice-check.component.scss']
})
export class InvoiceCheckComponent {
  constructor(
    public _drawService: DrawingCanvasService,
    private bottomSheet: MatBottomSheet,
    public _service: InvoiceCheckService,
  ) {}

  openComments = () => this.bottomSheet.open(BottomSheetComponent);
  print = () => window.print();
}
