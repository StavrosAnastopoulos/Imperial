import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ColorPickerComponent } from './color-picker.component';
import { DrawingService } from '../drawing.service';

@Component({
    selector: 'imp-color-picker',
    template: `
        <div (click)="openDialog()">
            <mat-icon [style.color]="drawingService.activeColor.toString">palette</mat-icon>
        </div>`
})
export class ColorPickerTriggerComponent {
    constructor(public dialog: MatDialog, public drawingService: DrawingService) {}

    openDialog(): void {
        this.dialog.open(ColorPickerComponent);
      }
}
