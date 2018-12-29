import { Component } from '@angular/core';
import { DrawingCanvasService } from 'src/app/shared/canvas/drawing-canvas.service';

@Component({
templateUrl: 'invoiceCheck.component.html',
styleUrls: ['invoiceCheck.component.scss']
})
export class InvoiceCheckComponent {
  constructor(public _drawService: DrawingCanvasService) {}

  print = () => window.print();
}
