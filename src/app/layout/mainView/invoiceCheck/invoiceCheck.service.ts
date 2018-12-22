import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export enum EditMode {
    None = 0,
    FreeHand = 1,
    Rectangle = 2
}

@Injectable({
    providedIn: 'root'
})
export class InvoiceCheckService {
    activeEditMode: EditMode = EditMode.FreeHand;
    activeColor = '#000';
    colorChanged = new Subject<string>();

    notifyColorChange = (event: string) => this.colorChanged.next(event);
}