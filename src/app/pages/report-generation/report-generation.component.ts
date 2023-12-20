import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SafeResourceUrl } from '@angular/platform-browser';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { ImperialDataProcessingService } from './imperial-data-processing.service';
import { ImageFileService } from 'src/app/shared/imageFiles.service';
import { LanguagePickerComponent } from 'src/app/shared/language-picker/language-picker.component';
import { ReportTitleComponent } from 'src/app/shared/title/report-title.component';
import { ClientInfoComponent } from 'src/app/shared/client-info/client-info.component';
import { DamageCardComponent } from 'src/app/shared/damage-card/damage-card.component';
import { TableInfoComponent } from 'src/app/shared/table/tableInfo.component';

@Component({
    standalone: true,
    templateUrl: 'report-generation.component.html',
    styleUrls: ['report-generation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ImperialDataProcessingService, ImageFileService],
    imports: [
        NgIf,
        NgFor,
        RouterModule,
        MatIconModule,
        LanguagePickerComponent,
        ReportTitleComponent,
        ClientInfoComponent,
        DamageCardComponent,
        TableInfoComponent,
    ]
})
export class ReportGenerationComponent {

    fileName = 'No file chosen';
    numberOfImages = 'No images chosen';
    imgFilePaths: SafeResourceUrl[] = [];
    dataProcessed = false;
    fileSelected = false;
    imgsSelected = false;

    data: any;

    imageAlbum: SafeResourceUrl[] = [];

    logoPath = 'assets/img/Dekra_Logo.png';
    logoDims = [600, 93];
    tableCss = 'imperial-table';
    checkboxCss = 'imperial-checkboxes';

    constructor(
        private ngxXml2jsonService: NgxXml2jsonService,
        private _imageParser: ImageFileService,
        private _dataProcessing: ImperialDataProcessingService,
        private cdr: ChangeDetectorRef,
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
                this.cdr.markForCheck();
            };
            reader.readAsText(event.target.files[0]);
            this.fileSelected = true;
        }
    }

}