import { Component } from '@angular/core';
import { DrawingCanvasService } from 'src/app/shared/canvas/drawing-canvas.service';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { InvoiceCheckService } from './invoice-check.service';
import { LocaleService } from 'src/app/shared/locale.service';

@Component({
templateUrl: 'invoiceCheck.component.html',
styleUrls: ['invoiceCheck.component.scss']
})
export class InvoiceCheckComponent {
  constructor(
    public _drawService: DrawingCanvasService,
    private bottomSheet: MatBottomSheet,
    public _service: InvoiceCheckService,
    public _localeService: LocaleService
  ) {}

  openComments = () => this.bottomSheet.open(BottomSheetComponent);
  print = () => window.print();
}
