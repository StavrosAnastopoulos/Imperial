import { Injectable } from '@angular/core';

export interface Cell {
    value: any;
    isAsync?: boolean;
    width?: number;
}

export interface Row {
    type: 'header' | 'row';
    cells: Cell[];
}

export interface TableData {
    rows: Row[];
    title: string;
    price: number;
}

@Injectable({ providedIn: 'root' })
export class TableSplitService {
    maxRows: number = 0;
    newTableRows: number = 0;
    currentRow: number = 0;
    tablesPerPage: TableData[] = [];
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
        const length = data.rows ? data.rows.length : 2;
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
            const tempIn = data.rows.splice(length - interim);
            this.tablesPerPage.push(data);
            this.currentRow = 0;
            this.pages.push(this.tablesPerPage);
            this.tablesPerPage = [];
            this.addTable(<TableData>{
                rows: tempIn,
                title: data.title,
                price: data.price
            });
        }
    }
}