import { Component, Input } from '@angular/core';
import { ImageFileService } from 'src/app/shared/imageFiles.service';

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

  width: number;
  height: number;
  dimensionsRead = false;

  fileName = 'Choose Invoice';

  constructor(private _imageParser: ImageFileService) {}

  addFile(event: any) {
    this.imgsPaths = this._imageParser.parseImages(event)
    if (!(this.imgsPaths.length > 0)){
      if (typeof (FileReader) !== 'undefined') {
        const reader: FileReader = new FileReader();
        this.fileName = event.target.files[0].name;
        reader.onload = (e: any) => {
          this.pdfFile = e.target.result;
        };

        reader.readAsArrayBuffer(event.target.files[0]);
      }
    } else {
      this.fileName = `${this.imgsPaths.length.toString()} images`;
    }
  }
}