import { Component } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ImperialDataProcessingService } from './imperial-data-processing.service';
import { ImageFileService } from 'src/app/shared/imageFiles.service';

@Component({
    templateUrl: 'report-generation.component.html',
    styleUrls: ['report-generation.component.scss']
})
export class ReportGenerationComponent {

    fileName = 'No file chosen';
    numberOfImages = 'No images chosen';
    imgFilePaths: SafeResourceUrl[] = [];
    dataProcessed = false;
    fileSelected = false;
    imgsSelected = false;

    data: any;

    imageAlbum = [];

    logoPath = 'assets/img/Logo_Imp_D_P.jpg';
    logoDims = [700, 65];
    tableCss = 'imperial-table';
    checkboxCss = 'imperial-checkboxes';

    constructor(
        private ngxXml2jsonService: NgxXml2jsonService,
        private _imageParser: ImageFileService,
        private _dataProcessing: ImperialDataProcessingService
    ) {}

    print = () => window.print();

    addImages(event: any) {
        this.imgsSelected = false;
        this.numberOfImages = 'No images chosen';

        this.imgFilePaths = this._imageParser.parseImages(event);
        this.numberOfImages = this.imgFilePaths.length.toString();
        this.imgsSelected = this.imgFilePaths.length > 0;

        while (this.imgFilePaths.length > 0) {
            this.imageAlbum.push(this.imgFilePaths.splice(0, 6));
        }
    }

    addFile(event: any) {
        if (!event || !event.target.files[0].name.toLowerCase().endsWith('.xml')) {
            this.fileName = 'Please select an XML file!';
            return ;
        } else {
            this.fileName = event.target.files[0].name;
        }

        if (typeof (FileReader) !== 'undefined') {
            const reader: FileReader = new FileReader();
            reader.onload = () => {

                const parser = new DOMParser();
                const xml = parser.parseFromString(reader.result as string, 'text/xml');

                this.data = this._dataProcessing.process(this.ngxXml2jsonService.xmlToJson(xml));

                this.dataProcessed = true;
            };
            reader.readAsText(event.target.files[0]);
            this.fileSelected = true;
        }
    }

}