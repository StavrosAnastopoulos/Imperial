import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Rgba } from '../color-picker/formats';

export enum EditMode {
    None = 0,
    FreeHand = 1,
    Rectangle = 2
}

export interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
    toString: string;
}

@Injectable({
    providedIn: 'root'
})
export class DrawingService {
    activeEditMode: EditMode = EditMode.FreeHand;
    blackColor = <Color>{
        r: 0,
        g: 0,
        b: 0,
        a: 1
    };
    activeColor: Color;
    presets = ['rgba()', '#f00', '#ff0', '#0f0', '#0ff', '#00f'];

    editModeChanged = new Subject<EditMode>();
    colorChanged = new Subject<string>();

    constructor() {
        this.setColor(this.blackColor);
    }

    setColor = (color: Color) => {
        this.activeColor = color;
        this.activeColor.toString = this.colorToString(this.activeColor);
        this.notifyColorChange(this.activeColor.toString);
    }

    setAlpha = (alpha: number) => {
        const tempColor = this.activeColor;
        tempColor.a = alpha;
        this.setColor(tempColor);
    }

    colorToString = (color: Color) => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

    addPreset = (color: string) => this.presets.push(color);
    removePreset = (color: string) => this.presets.splice(this.presets.indexOf(color), 1);

    notifyEditModeChanged = (event: EditMode) => {
        this.activeEditMode = event;
        this.editModeChanged.next(event);
    }

    notifyColorChange = (event: string) => this.colorChanged.next(event);
}
