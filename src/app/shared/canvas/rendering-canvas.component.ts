import {
    Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';

@Component({
    selector: 'imp-render-canvas',
    templateUrl: 'rendering-canvas.component.html',
    styleUrls: ['rendering-canvas.component.scss']
})
export class RenderingCanvasComponent implements AfterViewInit {
    @ViewChild('canvas') public canvas: ElementRef;
    @Input() page: any;

    private cx: CanvasRenderingContext2D;
    canvasEl: HTMLCanvasElement;

    constructor() {}

    public ngAfterViewInit() {
        Promise.resolve(null).then(() => {
            this.canvasEl = this.canvas.nativeElement;
            this.cx = this.canvasEl.getContext('2d');
            const viewport = this.page.getViewport(1.2);
            this.canvasEl.height = viewport.height;
            this.canvasEl.width = viewport.width;

            const renderContext = {
              canvasContext: this.cx,
              viewport: viewport
            };
            this.page.render(renderContext);
        });
    }
}
