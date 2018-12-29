import { Component, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { InvoiceCheckService } from '../invoice-check.service';

@Component({
  template: `
  <div #scroll
    style="max-height:500px; overflow: auto;"
    ><imp-text-area
      [value]="_invoiceService.commentSection"
      (valueChanged)="updateService($event)"
    ></imp-text-area>
  </div>`,
})
export class BottomSheetComponent implements AfterViewInit {

  @ViewChild('scroll') scroll: ElementRef;
  private scrollEl: any;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public _invoiceService: InvoiceCheckService) {}
  ngAfterViewInit(): void {
    this.scrollEl = this.scroll.nativeElement;
  }

  updateService = (event: any) => {
    this._invoiceService.commentSection = event;
    this.scrollEl.scrollTop = this.scrollEl.scrollHeight;
  }
}
