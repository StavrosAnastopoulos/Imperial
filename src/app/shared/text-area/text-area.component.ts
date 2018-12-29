import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'imp-text-area',
    template: `<textarea #textarea (keyup)="adjust()" style="overflow:hidden" [(ngModel)]="value"></textarea>`,
    styleUrls: ['text-area.component.scss']
})
export class TextAreaComponent implements AfterViewInit {
    @ViewChild('textarea') public textarea: ElementRef;
    private textareaEl: any;
    @Input() value: any;
    @Output() valueChanged = new EventEmitter<any>();
    constructor() {}

    ngAfterViewInit(): void {
        this.textareaEl = this.textarea.nativeElement;
    }

    public adjust = () => {
        this.textareaEl.style.height = '1px';
        this.textareaEl.style.height = (this.textareaEl.scrollHeight) + 'px';
        this.valueChanged.emit(this.value);
    }
}
