import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum EditMode {
    None = 0,
    FreeHand = 1,
    Rectangle = 2
}

@Injectable({
    providedIn: 'root'
})
export class DrawingCanvasService {
    activeEditMode: EditMode = EditMode.FreeHand;
    editModeChanged = new Subject<EditMode>();
    notifyEditModeChanged = (event: EditMode) => {
        this.activeEditMode = event;
        this.editModeChanged.next(event)
    };

    activeColor = '#000';
    colorChanged = new Subject<string>();
    notifyColorChange = (event: string) => this.colorChanged.next(event);
}