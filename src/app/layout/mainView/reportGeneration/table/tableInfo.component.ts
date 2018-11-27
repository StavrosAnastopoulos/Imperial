import { Component, Input } from "@angular/core";

@Component({
    selector: 'table-info',
    templateUrl: 'tableInfo.component.html',
    styleUrls : ['tableInfo.component.scss']
})
export class TableInfoComponent {
    @Input()
    columnPointers: [];
    @Input()
    sourceData: [];
    @Input()
    tableTitle: string;
    @Input()
    totalPrice: number;

    constructor(){}
}