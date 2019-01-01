import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { InvoiceCheckService } from './invoice-check.service';
import { DrawingService } from 'src/app/shared/drawing-tools/drawing.service';

@Component({
templateUrl: 'invoiceCheck.component.html',
styleUrls: ['invoiceCheck.component.scss']
})
export class InvoiceCheckComponent {
  constructor(
    public _drawService: DrawingService,
    private bottomSheet: MatBottomSheet,
    public _service: InvoiceCheckService
  ) {}

  openComments = () => this.bottomSheet.open(BottomSheetComponent);
  print = () => window.print();
}
