import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'imp-text-area',
    template: `<textarea #textarea
                    (keyup)="adjust()" style="overflow:hidden"
                    [(ngModel)]="value" [placeholder]="placeholder || ''"
                ></textarea>`,
    styleUrls: ['text-area.component.scss'],
    imports: [ FormsModule ]
})
export class TextAreaComponent implements AfterViewInit {
    @ViewChild('textarea', { static: true }) public textarea: ElementRef | null = null;
    private textareaEl: any;
    @Input() value: any;
    @Input() placeholder: string = '';
    @Output() valueChanged = new EventEmitter<any>();
    constructor() {}

    ngAfterViewInit(): void {
        this.textareaEl = this.textarea?.nativeElement;
    }

    public adjust = () => {
        this.textareaEl.style.height = '1px';
        this.textareaEl.style.height = (this.textareaEl.scrollHeight) + 'px';
        this.valueChanged.emit(this.value);
    }
}
