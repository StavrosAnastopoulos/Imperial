import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { EquipmentService } from './equipiment-only.service';

@Component({
    selector: 'imp-equipment-generation',
    templateUrl: 'equipment-generation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EquipmentService]
})
export class EquipmentGenerationComponent {
    public fileName: string = 'No file chosen';
    public dataProcessed: boolean = false;
    public fileSelected: boolean = false;

    public data: any;

    constructor(
        private ngxXml2jsonService: NgxXml2jsonService,
        private _dataProcessing: EquipmentService,
        private cdr: ChangeDetectorRef,
    ) {}

    public print = () => window.print();

    public addFile(event: any) {
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