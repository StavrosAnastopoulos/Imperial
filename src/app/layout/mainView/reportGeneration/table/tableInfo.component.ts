import { Component, Input } from "@angular/core";
import { TableData } from "../table-split.service";

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