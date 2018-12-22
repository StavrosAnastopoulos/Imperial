import { Component } from "@angular/core";
import { InvoiceCheckService } from "./invoiceCheck.service";

@Component({
templateUrl: 'invoiceCheck.component.html',
styleUrls: ['invoiceCheck.component.scss']
})
export class InvoiceCheckComponent {
  constructor(public _service: InvoiceCheckService) {}

  print = () => window.print();
}
