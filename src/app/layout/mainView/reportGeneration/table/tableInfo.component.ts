import { Component, Input } from "@angular/core";
import { LanguagePacks, LanguagePack } from "../locales";

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
    locale = 'en'
    @Input()
    totalPrice: number;


    titles: LanguagePack;

    constructor(){
        this.titles = LanguagePacks[this.locale];
    }
}