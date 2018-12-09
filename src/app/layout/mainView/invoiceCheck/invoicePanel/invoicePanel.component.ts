import { Component, Input, ElementRef, ViewChild } from "@angular/core";
import { ImageFileService } from "../../imageFiles.service";

@Component({
    selector: 'imp-invoice-element',
    templateUrl: 'invoicePanel.component.html',
    styleUrls: ['invoicePanel.component.scss']
})
export class InvoicePanelComponent {
  @Input()
  inputId: string;
  docFile: File;
  pdfFile: any;
  imgsPaths: any[] = [];

  @ViewChild('container')
  containerEl: ElementRef;
  
  width: number;
  height: number;
  dimensionsRead = false;
  
  constructor(private _imageParser: ImageFileService) {}

  PDFNotifier(event: any) {
    if (event == 'FINISHED') {
      this.width = this.containerEl.nativeElement.scrollWidth;
      this.height = this.containerEl.nativeElement.scrollHeight;
      this.dimensionsRead = true;
    }
  }

  addFile(event: any) {
    this.imgsPaths = this._imageParser.parseImages(event)
    if (!(this.imgsPaths.length > 0)){
      if (typeof (FileReader) !== 'undefined') {
        let reader: FileReader = new FileReader();
       
        reader.onload = (e: any) => {
          this.pdfFile = e.target.result;
        };
        
        reader.readAsArrayBuffer(event.target.files[0]);
      }
    }
  }
}