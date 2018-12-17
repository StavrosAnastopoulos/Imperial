import { Component } from "@angular/core";

@Component({
templateUrl: 'invoiceCheck.component.html',
styleUrls: ['invoiceCheck.component.scss']
})
export class InvoiceCheckComponent {
  color = '#000';
  constructor() {}

  print = () => window.print();
}
