import { Component } from "@angular/core";
import { NgxXml2jsonService } from 'ngx-xml2json';
import { LocaleService } from "./locale.service";
import { SafeResourceUrl } from "@angular/platform-browser";
import { TableData } from './table/tableInfo.component'
import { ImageFileService } from "../imageFiles.service";

@Component({
selector: '',
templateUrl: 'reportGeneration.component.html',
styleUrls: ['reportGeneration.component.scss']
})
export class ReportGenerationComponent {

    fileName = 'No file chosen';
    numberOfImages = 'No images chosen';
    imgFilePaths: SafeResourceUrl[] = [];
    locale: string = 'en';
    data: any = {};
    
    additionalInfo = {};
    ownerInfo: any = {};
    dealerInfo: any = {};
    expertInfo: any = {};
    vehicleInfo: any = {};

    materialInfo: any = {};
    materialHeader = 'SpareParts';
    materialPointers = ['PartNumber', 'Description', 'ValuePerUnit', 'Amount', 'ValueTotalCorrected'];
    
    labourInfo: any = {};
    labourHeader = 'Labour';
    labourPointers = ['LabourPosId', 'Description', 'WageLevel', 'Duration', 'ValueTotalCorrected'];
    
    lacquerInfo: any = {};
    lacquerHeader = 'Lacquer';
    lacquerPointers = ['WageLevel', 'Description', 'Material', 'Duration', 'WagePrice', 'ValueTotalCorrected'];
    
    sparePartSum: any = {};
    sparePartHeader = 'SumBlockSpareParts';
    sparePartPointers = ['Description', 'AllSum', 'ConsumablesSurcharge', 'ValueTotalCorrected'];
    sparePartTotal: number;

    labourSum: any = [];
    labourSumHeader = 'SumBlockWage';
    labourSumPointers = ['Description', 'Duration', 'PricePerUnit', 'ValueTotalCorrected'];
    labourSumTotal: number;

    lacquerSum: any = [];
    lacquerSumHeader = 'SumBlockLacquer';
    lacquerSumPointers = ['Description', 'Duration', 'PricePerUnit', 'ValueTotalCorrected'];
    lacquerSumTotal: number;

    finalSum: any = [];
    finalSumHeader = 'CostSummary';
    finalSumPointers = ['Description', 'TotalNetCosts', 'TotalVAT', 'TotalGrossCosts'];
    finalSumTotal: number;

    dataProcessed = false;
    fileSelected = false;
    imgsSelected = false;

    namepsace: string;

    maxRows = 29;
    newTableRows = 3;
    currentRow: number;
    tablesPerPage: TableData[];
    pages: any;

    constructor(
        private ngxXml2jsonService: NgxXml2jsonService,
        private localeService: LocaleService,
        private _imageParser: ImageFileService
    ){}

    print = () => window.print();

    addImages(event: any) {
        this.imgsSelected = false;
        this.numberOfImages = 'No images chosen';

        this.imgFilePaths = this._imageParser.parseImages(event);

        this.numberOfImages = this.imgFilePaths.length.toString();
        this.imgsSelected = this.imgFilePaths.length > 0;
    }

    addFile(event: any) {
        if (!event || !event.target.files[0].name.toLowerCase().endsWith('.xml')) {
            this.fileName = 'Please select an XML file!'
            return ;
        }
        else {
            this.fileName = event.target.files[0].name;
        }

        if (typeof (FileReader) !== 'undefined') {
            const reader: FileReader = new FileReader();
            reader.onload = () => {
                this.pages = [];
                this.tablesPerPage = [];
                this.currentRow = 0;
                
                const parser = new DOMParser();
                const xml = parser.parseFromString(reader.result as string, 'text/xml');
                this.data = this.ngxXml2jsonService.xmlToJson(xml)
                if (this.data['S:Envelope']) {
                   this.data = this.data['S:Envelope']['S:Body']  
                   this.data = this.data[Object.keys(this.data)[1]]['return'];

                   const temp = this.data['customTemplateData']['entry'];
                   Object.keys(temp).forEach(item => this.additionalInfo[temp[item]['key']] = temp[item]['value']);
                   this.data = this.trimNameSpace(this.data['ns1:Dossier']);
                } else if (this.data['ns2:Dossiers']) {
                    this.data = this.trimNameSpace(this.data['ns2:Dossiers']['ns2:Dossier'])
                }
                // client info page

                // console.log(this.data)

                this.localeService.setLocal(this.data['Language']);
                this.dealerInfo = this.data['TradingData']['Dealership'];
                this.expertInfo = this.data['TradingData']['Expert'];
                this.ownerInfo = this.data['TradingData']['Owner'];
                this.vehicleInfo = this.data['Vehicle'];
        console.log(this.vehicleInfo)
                // details
                const details = this.data['RepairCalculation']['CalcResultCommon']
                this.materialInfo = details['MaterialPositions']['MaterialPosition'];
                if(!this.materialInfo.length) this.materialInfo = [this.materialInfo]

                this.labourInfo = details['LabourPositions']['LabourPosition'];
                if(!this.labourInfo.length) this.labourInfo = [this.labourInfo]

                this.lacquerInfo = details['LacquerPositions']['LacquerPosition'];
                if(!this.lacquerInfo.length) this.lacquerInfo = [this.lacquerInfo]
                this.lacquerInfo.forEach(item => {
                    item['WagePrice'] = 30 * item['Duration'];
                    item['WageLevel'] = item['LabourPosId'];
                });

                this.addTable(this.materialInfo, this.materialPointers, this.materialHeader);
                this.addTable(this.labourInfo, this.labourPointers, this.labourHeader);
                this.addTable(this.lacquerInfo, this.lacquerPointers, this.lacquerHeader);
                if(this.tablesPerPage) { // leftovers
                    this.pages.push(this.tablesPerPage);
                }
                this.tablesPerPage = [];

                // summary
                const summary = this.data['RepairCalculation']['CalculationSummary'];
                summary['SparePartsCosts']['Description'] = 'SparePartsSum | header';
                summary['SparePartsCosts']['ValueTotalCorrected'] = summary['SparePartsCosts']['TotalSum'];
                this.sparePartSum = [summary['SparePartsCosts']];
                this.sparePartTotal = summary['SparePartsCosts']['TotalSum'];

                this.labourSumTotal = summary['LabourCosts']['TotalSum'];
                delete summary['LabourCosts']['TotalSum'];
                Object.keys(summary['LabourCosts']).forEach(key => this.labourSum.push(summary['LabourCosts'][key]));
                this.labourSum.forEach(element => {
                    element['Description'] = this.labourReplacement[element['Type']]
                    element['Duration'] = element['Units']
                    element['ValueTotalCorrected'] = element['Price']
                });

                summary['LacquerCosts']['Wage']['Description'] = 'Wage | header';
                this.lacquerSum.push(summary['LacquerCosts']['Wage']);
                this.lacquerSum.push(...summary['LacquerCosts']['Material']['LacquerConstants']['LacquerConstant']);
                summary['LacquerCosts']['Material']['MaterialGroups']['LacquerMaterialGroupSummary'].forEach(item => item['Description'] = item['Name']);
                this.lacquerSum.push(...summary['LacquerCosts']['Material']['MaterialGroups']['LacquerMaterialGroupSummary']);
                this.lacquerSum.forEach(element => {
                    element['Duration'] = element['Units']
                    element['ValueTotalCorrected'] = element['Price']
                });

                this.lacquerSumTotal = summary['LacquerCosts']['TotalSum'];

                this.finalSum = [{
                    'Description': 'RepairCost | header',
                    'TotalNetCosts': summary['TotalNetCosts'],
                    'TotalVAT': summary['TotalVAT'],
                    'TotalGrossCosts': summary['TotalGrossCosts']
                }];
                this.finalSumTotal = summary['TotalGrossCosts'];

                this.tablesPerPage.push(<TableData>{
                    source: this.sparePartSum,
                    pointers: this.sparePartPointers,
                    title: this.sparePartHeader,
                    price: this.sparePartTotal
                })
                this.tablesPerPage.push(<TableData>{
                    source: this.labourSum,
                    pointers: this.labourSumPointers,
                    title: this.labourSumHeader,
                    price: this.labourSumTotal
                })
                this.tablesPerPage.push(<TableData>{
                    source: this.lacquerSum,
                    pointers: this.lacquerSumPointers,
                    title: this.lacquerSumHeader,
                    price: this.lacquerSumTotal
                })
                this.tablesPerPage.push(<TableData>{
                    source: this.finalSum,
                    pointers: this.finalSumPointers,
                    title: this.finalSumHeader,
                    price: this.finalSumTotal
                })
                this.pages.push(this.tablesPerPage);
                this.tablesPerPage = [];

                this.dataProcessed = true;
            }
            reader.readAsText(event.target.files[0]);
            this.fileSelected = true;
        }
    }
    
    trimNameSpace = (temp: any): any => {
        Object.keys(temp).forEach(key => {
            if(key == '#text') {
                delete temp['#text'];
            }
            if(typeof(temp[key]) == 'object') {
                temp[key] = this.trimNameSpace(temp[key])    
            }
            if (key.includes(':')) {
                temp[key.split(':')[1]] = temp[key];
                delete temp[key];
            }
        });
        return temp;
    }

    addTable = (source: any, pointers: string[], title: string) => {
        this.currentRow += this.newTableRows;
        if (this.currentRow + source.length < this.maxRows) {
            this.tablesPerPage.push(
                <TableData>{
                    pointers: pointers,
                    source: source,
                    title: title
                }
            );
            this.currentRow += source.length
            if(this.maxRows - this.currentRow < 6) {
                this.currentRow = 0;
                this.pages.push(this.tablesPerPage);
                this.tablesPerPage = [];
            }
        } else {
            const interim = this.currentRow + source.length - this.maxRows
            const tempIn = source.splice(source.length - interim);
            this.tablesPerPage.push(
                <TableData>{
                    pointers: pointers,
                    source: source,
                    title: title
                }
            );
            this.currentRow = 0;
            this.pages.push(this.tablesPerPage);
            this.tablesPerPage = [];
            this.addTable(tempIn, pointers, title);
        }
    }

    labourReplacement = {
        'CAR BODY': 'BodyWork | header',
        'ELECTRIC': 'Electrics | header',
        'MECHANIC': 'MechanicalSystems | header'
    };
}