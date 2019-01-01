import {
    Component, Input, ElementRef, AfterViewInit, ViewChild, OnDestroy
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { DrawingService, EditMode } from '../drawing.service';

interface Rectangle {
    startX: number;
    startY: number;
    width: number;
    height: number;
}

@Component({
    selector: 'imp-draw-canvas',
    template: `<canvas #canvas class="overlayCanvas"></canvas>`,
    styles: ['.overlayCanvas { position: absolute; z-index: 100; }']
})
export class DrawingCanvasComponent implements AfterViewInit, OnDestroy {
    @ViewChild('canvas') public canvas: ElementRef;

    @Input() canvasWidth: number;
    @Input() canvasHeight: number;

    private cx: CanvasRenderingContext2D;
    private canvasEl: HTMLCanvasElement;
    private offsetRect: any;

    private subscriptions: Subscription;

    constructor(private _service: DrawingService) {
        this.subscriptions = this._service.colorChanged.subscribe((color: string) => this.cx.strokeStyle = color);
        this.subscriptions.add(this._service.editModeChanged.subscribe((mode: EditMode) => this.changeMode(mode)));
    }

    changeMode = (mode: EditMode) => {
        if (mode == EditMode.FreeHand) {
          this.cx.setLineDash([0]);
          this.rectUnsub();
          this.freeHandSubs();
        } else if (mode == EditMode.Rectangle) {
          this.freeHandUnsub();
          this.rectSubs();
        }
    }

    public ngAfterViewInit() {
        this.canvasEl = this.canvas.nativeElement;
        this.cx = this.canvasEl.getContext('2d');
        this.canvasEl.width = this.canvasWidth;
        this.canvasEl.height = this.canvasHeight;

        this.cx.lineWidth = 3;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = this._service.activeColor.toString;

        this.changeMode(this._service.activeEditMode);
    }

      // free hand draw
    private freeHandSubObj: Subscription;
    private freeHandSubs = () => {
        this.freeHandSubObj = fromEvent(this.canvasEl, 'mousedown')
          .pipe(
            switchMap((e) => {
              return fromEvent(this.canvasEl, 'mousemove')
                .pipe(
                  takeUntil(fromEvent(this.canvasEl, 'mouseup')),
                  takeUntil(fromEvent(this.canvasEl, 'mouseleave')),
                  pairwise()
                )
            })
          )
          .subscribe((res: [MouseEvent, MouseEvent]) => {
            this.offsetRect = this.canvasEl.getBoundingClientRect();

            const prevPos = {
              x: res[0].clientX - this.offsetRect.left,
              y: res[0].clientY - this.offsetRect.top
            };

            const currentPos = {
              x: res[1].clientX - this.offsetRect.left,
              y: res[1].clientY - this.offsetRect.top
            };

            this.drawOnCanvas(prevPos, currentPos);
          });
    }

    private freeHandUnsub() {
        if (this.freeHandSubObj) {
          this.freeHandSubObj.unsubscribe();
        }
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

    // rect Draw
    private rect: Rectangle = <Rectangle>{};
    private drag = false;
    private rectSubbed = false;

    private directionX = 1;
    private directionY = 1;

    private rectSubs = () => {
        this.canvasEl.addEventListener('mousedown', this.rectMouseDown, false);
        this.canvasEl.addEventListener('mouseup', this.rectMouseUp, false);
        this.canvasEl.addEventListener('mousemove', this.rectMouseMove, false);
        this.rectSubbed = true;
    }

    private rectUnsub = () => {
        if (this.rectSubbed) {
          this.canvasEl.removeEventListener('mousedown', this.rectMouseDown, false);
          this.canvasEl.removeEventListener('mouseup', this.rectMouseUp, false);
          this.canvasEl.removeEventListener('mousemove', this.rectMouseMove, false);
          this.rectSubbed = false;
        }
    }

    private rectMouseDown = (e: MouseEvent) => {
        this.offsetRect = this.canvasEl.getBoundingClientRect();

        this.rect.startX = e.clientX - this.offsetRect.left;
        this.rect.startY = e.clientY - this.offsetRect.top;
        this.drag = true;
    }

    private rectMouseUp = () => {
        this.drag = false;
        this.clearLastRect();
        this.drawSolidRect();
    }

    private rectMouseMove = (e: MouseEvent) => {
        if (this.drag) {
          this.clearLastRect();
          this.offsetRect = this.canvasEl.getBoundingClientRect();
          this.rect.width = (e.clientX - this.offsetRect.left) - this.rect.startX;
          this.rect.height =(e.clientY - this.offsetRect.top) - this.rect.startY;

          this.directionX = this.rect.width > 0 ? 1 : -1;
          this.directionY = this.rect.height > 0 ? 1 : -1;

          this.drawDashRect();
        }
    }

    clearLastRect = () => this.cx.clearRect(
        this.rect.startX - this.directionX * this.cx.lineWidth,
        this.rect.startY - this.directionY * this.cx.lineWidth,
        this.rect.width + this.directionX * this.cx.lineWidth * 2,
        this.rect.height + this.directionY * this.cx.lineWidth * 2
    );

    private drawSolidRect = () => {
        this.cx.setLineDash([0]);
        this.cx.strokeRect(this.rect.startX, this.rect.startY, this.rect.width, this.rect.height);
    }

    private drawDashRect = () => {
        this.cx.setLineDash([6]);
        this.cx.strokeRect(this.rect.startX, this.rect.startY, this.rect.width, this.rect.height);
    }

    ngOnDestroy(): void {
        this.freeHandUnsub();
        this.rectUnsub();
        if (this.subscriptions) {
          this.subscriptions.unsubscribe();
        }
    }
}
