import { Injectable } from '@angular/core';

export interface TableData {
    pointers: [];
    source: [];
    title: string;
    price: number;
}

@Injectable({
    providedIn: 'root'
})
export class TableSplitService {
    maxRows: number;
    newTableRows: number;
    currentRow: number;
    tablesPerPage: TableData[];
    pages: any;

    startSession = (maxPageRows = 33, newTableIntend = 3) => {
        this.pages = [];
        this.tablesPerPage = [];
        this.currentRow = 0;

        this.maxRows = maxPageRows;
        this.newTableRows = newTableIntend;
    }

    switchPage = () => {
        if (this.tablesPerPage) {
            this.pages.push(this.tablesPerPage);
        }
        this.tablesPerPage = [];
        this.currentRow = 0;
    }

    endSession = () => {
        if (this.tablesPerPage.length > 0) {
            this.pages.push(this.tablesPerPage);
        }
        return this.pages;
    }

    addTable = (data: TableData) => {
        const length = data.source ? data.source.length : 2;
        this.currentRow += this.newTableRows;
        if (this.currentRow + length <= this.maxRows) {
            this.tablesPerPage.push(data);
            this.currentRow += length;
            if (this.maxRows - this.currentRow < 6) {
                this.currentRow = 0;
                this.pages.push(this.tablesPerPage);
                this.tablesPerPage = [];
            }
        } else {
            const interim = this.currentRow + length - this.maxRows;
            const tempIn = data.source.splice(length - interim);
            this.tablesPerPage.push(data);
            this.currentRow = 0;
            this.pages.push(this.tablesPerPage);
            this.tablesPerPage = [];
            this.addTable(<TableData>{
                source: tempIn,
                pointers: data.pointers,
                title: data.title
            });
        }
    }
}