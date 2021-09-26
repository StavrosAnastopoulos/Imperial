import { Component, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { InvoiceCheckService } from '../invoice-check.service';

@Component({
  template: `
  <input [placeholder]="'LicensePlate' | translate"
    [(ngModel)]="_invoiceService.licensePlate"
  >
  <div #scroll class="scroll"
    ><imp-text-area
      [placeholder]="'invoiceComparisonComments' | translate"
      [value]="_invoiceService.commentSection"
      (valueChanged)="updateService($event)"
    ></imp-text-area>
  </div>`,
  styleUrls: ['bottom-sheet.component.scss']
})
export class BottomSheetComponent implements AfterViewInit {
  @ViewChild('scroll', { static: true }) scroll: ElementRef | null = null;
  private scrollEl: any;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public _invoiceService: InvoiceCheckService) {}
  ngAfterViewInit(): void {
    this.scrollEl = this.scroll?.nativeElement;
  }

  updateService = (event: any) => {
    this._invoiceService.commentSection = event;
    this.scrollEl.scrollTop = this.scrollEl.scrollHeight;
  }
}
