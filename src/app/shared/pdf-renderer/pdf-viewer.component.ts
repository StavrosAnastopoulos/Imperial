/*
  Modified from https://github.com/bearnithi/bn-ng-pdf-viewer/tree/master/src/lib
*/
import { Component, Input } from '@angular/core';
import { PDFJSStatic } from 'pdfjs-dist';

const PDFJS: PDFJSStatic = require('pdfjs-dist');
PDFJS.workerSrc = require('pdfjs-dist/build/pdf.worker');


@Component({
  selector: 'imp-pdf-viewer',
  templateUrl: 'pdf-viewer.component.html',
  styleUrls: ['pdf-viewer.component.scss']
})
export class PdfViewerComponent {
  private _PDF: string;

  @Input() set PDF(value: string) {
    this._PDF = value;
    this.initPdfViewer();
  }

  get PDF() {
    return this._PDF;
  }

  public numOfPages: number;
  public PDFDocument: any;
  public showError: boolean;

  public pages: any = [];

  public _isValid: boolean;
  private get isValidPDF() {
    if (this._isValid == undefined) {
      this._isValid = (this.PDF && this.PDF !== '' && !this.showError) ? true : false;
    }
    return this._isValid;
  }

  constructor() {
    let pdfWorkerSrc: string;

    if (window.hasOwnProperty('pdfWorkerSrc') && typeof (window as any).pdfWorkerSrc === 'string' && (window as any).pdfWorkerSrc) {
      pdfWorkerSrc = (window as any).pdfWorkerSrc;
    } else {
      pdfWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${(PDFJS as any).version}/pdf.worker.min.js`;
    }

    (PDFJS as any).GlobalWorkerOptions.workerSrc = pdfWorkerSrc;
  }

  initPdfViewer() {
    if (this.isValidPDF) {
      PDFJS.getDocument(this._PDF).then(
        (PDF) => {
          this.PDFDocument = PDF;
          this.numOfPages = PDF.numPages;
          this.renderAllPages();
        },
        (error) => {
          this.trackError(error);
        }
      );
    }
  }

  renderAllPages() {
    this.showError = false;
    for (let i = 1; i <= this.numOfPages; i++) {
      this.PDFDocument.getPage(i).then((page: any) => this.pages.push(page));
    }
  }

  trackError (error: any) {
    this.showError = true;
    this.PDFDocument = undefined;
    this.PDF = '';
    console.error(error);
  }
}
