import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DrawingService } from '../drawing.service';

@Component({
    templateUrl: 'color-picker.component.html',
    styleUrls: ['color-picker.component.scss']
})
export class ColorPickerComponent {
    public hue: number;
    public alpha: number;

    constructor(
        public dialogRef: MatDialogRef<ColorPickerComponent>,
        public drawingService: DrawingService
    ) {}

    alphaChanged = () => {
        
    }
}
