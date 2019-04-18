import { Component } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { EquipmentService } from './equipiment-only.service';

@Component({
    templateUrl: 'equipment-generation.component.html'
})
export class EquipmentGenerationComponent {

    fileName = 'No file chosen';
    dataProcessed = false;
    fileSelected = false;

    data: any;

    imageAlbum = [];

    constructor(
        private ngxXml2jsonService: NgxXml2jsonService,
        private _dataProcessing: EquipmentService
    ) {}

    print = () => window.print();

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