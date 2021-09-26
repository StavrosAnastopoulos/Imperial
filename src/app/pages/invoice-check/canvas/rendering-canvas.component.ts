import {
    Component, Input, ElementRef, AfterViewInit, ViewChild
} from '@angular/core';

@Component({
    selector: 'imp-render-canvas',
    templateUrl: 'rendering-canvas.component.html',
    styleUrls: ['rendering-canvas.component.scss']
})
export class RenderingCanvasComponent implements AfterViewInit {
    @ViewChild('canvas', { static: true }) public canvas: ElementRef | null = null;
    @Input() page: any;

    private cx: CanvasRenderingContext2D | null = null;
    canvasEl: HTMLCanvasElement | null = null;

    constructor() {}

    public ngAfterViewInit() {
        Promise.resolve(null).then(() => {
            if (this.canvas != null) {
                this.canvasEl = this.canvas.nativeElement;

                if (this.canvasEl != null) {
                    this.cx = this.canvasEl.getContext('2d');
                    const viewport = this.page.getViewport(1.2);
                    this.canvasEl.height = viewport.height;
                    this.canvasEl.width = viewport.width;
        
                    const renderContext = {
                      canvasContext: this.cx,
                      viewport: viewport
                    };
                    this.page.render(renderContext);
                }
            }
        });
    }
}
