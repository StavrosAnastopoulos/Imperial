import { Component, Input } from "@angular/core";

export interface TableData {
    pointers: [];
    source: [];
    title: string;
    price: number;
}

@Component({
    selector: 'table-info',
    templateUrl: 'tableInfo.component.html',
    styleUrls : ['tableInfo.component.scss']
})
export class TableInfoComponent {
    @Input()
    data: TableData

    constructor(){}
}