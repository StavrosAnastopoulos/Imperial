import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImageFileService } from '../../../shared/imageFiles.service';

@Component({
    selector: 'imp-invoice-element',
    templateUrl: 'invoicePanel.component.html',
    styleUrls: ['invoicePanel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ImageFileService]
})
export class InvoicePanelComponent {
  @Input() inputId: string = '';
  @Input() label: string = '';
  docFile: File | null = null;
  pdfFile: any;
  imgsPaths: SafeResourceUrl[] = [];

  width: number = 0;
  height: number = 0;
  dimensionsRead = false;

  fileName = 'Choose Invoice';

  constructor(private _imageParser: ImageFileService) {}

  addFile(event: any) {
    if (event.target.files.length > 0) {
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
}