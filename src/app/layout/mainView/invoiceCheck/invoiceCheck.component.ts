import { Component } from "@angular/core";

@Component({
selector: '',
templateUrl: 'invoiceCheck.component.html',
styleUrls: ['invoiceCheck.component.scss']
})
export class InvoiceCheckComponent {

    pdfSrcLeft: any = [];
    pdfSrcRight: any = [];

constructor(){}

addFile(array: any, id: string) {
    let $img: any = document.querySelector('#' + id);
   
    if (typeof (FileReader) !== 'undefined') {
      let reader: FileReader = new FileReader();
   
      reader.onload = (e: any) => {
        array.push(e.target.result);
      };
   
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}