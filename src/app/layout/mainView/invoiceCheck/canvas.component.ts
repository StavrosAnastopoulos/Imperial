import {
  Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
import { InvoiceCheckService } from './invoiceCheck.service';

@Component({
  selector: 'imp-canvas',
  template: '<canvas #canvas class="overlayCanvas"></canvas>',
  styles: ['.overlayCanvas { position: absolute; z-index: 2000; }']
})
export class CanvasComponent implements AfterViewInit {

    @ViewChild('canvas') public canvas: ElementRef;

    @Input()
    canvasWidth: number;
    @Input()
    canvasHeight: number;

    private cx: CanvasRenderingContext2D;

    constructor(private _invoiceService: InvoiceCheckService) {
      this. _invoiceService.colorChanged.subscribe((color: string) => this.cx.strokeStyle = color);
    }

    public ngAfterViewInit() {
      const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
      this.cx = canvasEl.getContext('2d');
       canvasEl.width = this.canvasWidth;
       canvasEl.height = this.canvasHeight;

       this.cx.lineWidth = 3;
      this.cx.lineCap = 'round';
      this.cx.strokeStyle = this._invoiceService.activeColor;

      this.captureEvents(canvasEl);
    }

    private captureEvents(canvasEl: HTMLCanvasElement) {
      fromEvent(canvasEl, 'mousedown')
        .pipe(
          switchMap((e) => {
            return fromEvent(canvasEl, 'mousemove')
              .pipe(
                takeUntil(fromEvent(canvasEl, 'mouseup')),
                takeUntil(fromEvent(canvasEl, 'mouseleave')),
                pairwise()
              )
          })
        )
        .subscribe((res: [MouseEvent, MouseEvent]) => {
          const rect = canvasEl.getBoundingClientRect();

          const prevPos = {
            x: res[0].clientX - rect.left,
            y: res[0].clientY - rect.top
          };

          const currentPos = {
            x: res[1].clientX - rect.left,
            y: res[1].clientY - rect.top
          };

          this.drawOnCanvas(prevPos, currentPos);
        });
    }

    private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
      if (!this.cx) { return; }

      this.cx.beginPath();

      if (prevPos) {
        this.cx.moveTo(prevPos.x, prevPos.y);
        this.cx.lineTo(currentPos.x, currentPos.y);
        this.cx.stroke();
      }
    }

  }
