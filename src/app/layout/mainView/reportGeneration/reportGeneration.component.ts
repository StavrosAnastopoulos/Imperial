import { Component } from "@angular/core";
import { NgxXml2jsonService } from 'ngx-xml2json';
import { LocaleService } from "./locale.service";
                
@Component({
selector: '',
templateUrl: 'reportGeneration.component.html',
styleUrls: ['reportGeneration.component.scss']
})
export class ReportGenerationComponent {

    locale: string = 'en';
    data: any = {};
    
    additionalInfo = {};
    ownerInfo: any = {};
    dealerInfo: any = {};
    expertInfo: any = {};
    vehicleInfo: any = {};

    materialInfo: any = {};
    materialHeader = 'SpareParts';
    materialPointers = ['ns1:PartNumber', 'ns1:Description', 'ns1:ValuePerUnit', 'ns1:Amount', 'ns1:ValueTotalCorrected'];
    
    labourInfo: any = {};
    labourHeader = 'Labour';
    labourPointers = ['ns1:LabourPosId', 'ns1:Description', 'ns1:WageLevel', 'ns1:Duration', 'ns1:ValueTotalCorrected'];
    
    lacquerInfo: any = {};
    lacquerHeader = 'Lacquer';
    lacquerPointers = ['ns1:WageLevel', 'ns1:Description', 'ns1:Material', 'ns1:Duration', 'WagePrice', 'ns1:ValueTotalCorrected'];
    
    sparePartSum: any = {};
    sparePartHeader = 'SumBlockSpareParts';
    sparePartPointers = ['ns1:Description', 'ns1:AllSum', 'ns1:ConsumablesSurcharge', 'ns1:ValueTotalCorrected'];
    sparePartTotal: number;

    labourSum: any = [];
    labourSumHeader = 'SumBlockWage';
    labourSumPointers = ['ns1:Description', 'ns1:Duration', 'ns1:PricePerUnit', 'ns1:ValueTotalCorrected'];
    labourSumTotal: number;

    lacquerSum: any = [];
    lacquerSumHeader = 'SumBlockLacquer';
    lacquerSumPointers = ['ns1:Description', 'ns1:Duration', 'ns1:PricePerUnit', 'ns1:ValueTotalCorrected'];
    lacquerSumTotal: number;

    finalSum: any = [];
    finalSumHeader = 'CostSummary';
    finalSumPointers = ['ns1:Description', 'ns1:TotalNetCosts', 'ns1:TotalVAT', 'ns1:TotalGrossCosts'];
    finalSumTotal: number;

    dataProcessed = false;
    fileSelected = false;
    constructor(private ngxXml2jsonService: NgxXml2jsonService, private localeService: LocaleService){}

    addFile() {
        const $img: any = document.querySelector('#file');
       
        if (typeof (FileReader) !== 'undefined') {
            const reader: FileReader = new FileReader();
            reader.onload = () => {

                const parser = new DOMParser();
                const xml = parser.parseFromString(reader.result as string, 'text/xml');
                this.data = this.ngxXml2jsonService.xmlToJson(xml)['S:Envelope']['S:Body']['ns3:getContractResponse']['return'];

                // client info page
                const temp = this.data['customTemplateData']['entry'];
                Object.keys(temp).forEach(item => this.additionalInfo[temp[item]['key']] = temp[item]['value']);
                console.log(this.additionalInfo)
                this.data = this.data['ns1:Dossier'];

                this.localeService.setLocal(this.data['ns1:Language']);

                this.dealerInfo = this.data['ns1:TradingData']['ns1:Dealership'];
                delete this.dealerInfo['#text'];
        
                this.expertInfo = this.data['ns1:TradingData']['ns1:Expert'];
                delete this.expertInfo['#text'];
        
                this.ownerInfo = this.data['ns1:TradingData']['ns1:Owner'];
                delete this.ownerInfo['#text'];

                this.vehicleInfo = this.data['ns1:Vehicle'];
                delete this.vehicleInfo['#text'];
        
                // details
                const details = this.data['ns1:RepairCalculation']['ns1:CalcResultCommon']
                this.materialInfo = details['ns1:MaterialPositions']['ns1:MaterialPosition'];
                delete this.materialInfo['#text'];
        
                this.labourInfo = details['ns1:LabourPositions']['ns1:LabourPosition'];
                delete this.materialInfo['#text'];
        
                this.lacquerInfo = details['ns1:LacquerPositions']['ns1:LacquerPosition'];
                delete this.materialInfo['#text'];
                this.lacquerInfo.forEach(item => {
                    item['WagePrice'] = 30 * item['ns1:Duration'];
                    item['ns1:WageLevel'] = item['ns1:LabourPosId'];
                });

                // summary
                const summary = this.data['ns1:RepairCalculation']['ns1:CalculationSummary'];
                summary['ns1:SparePartsCosts']['ns1:Description'] = 'SparePartsSum | header';
                summary['ns1:SparePartsCosts']['ns1:ValueTotalCorrected'] = summary['ns1:SparePartsCosts']['ns1:TotalSum'];
                this.sparePartSum = [summary['ns1:SparePartsCosts']];
                this.sparePartTotal = summary['ns1:SparePartsCosts']['ns1:TotalSum'];

                delete summary['ns1:LabourCosts']['#text'];
                this.labourSumTotal = summary['ns1:LabourCosts']['ns1:TotalSum'];
                delete summary['ns1:LabourCosts']['ns1:TotalSum'];
                Object.keys(summary['ns1:LabourCosts']).forEach(key => this.labourSum.push(summary['ns1:LabourCosts'][key]));
                this.labourSum.forEach(element => {
                    element['ns1:Description'] = this.labourReplacement[element['ns1:Type']]
                    element['ns1:Duration'] = element['ns1:Units']
                    element['ns1:ValueTotalCorrected'] = element['ns1:Price']
                });

                summary['ns1:LacquerCosts']['ns1:Wage']['ns1:Description'] = 'Wage | header';
                this.lacquerSum.push(summary['ns1:LacquerCosts']['ns1:Wage']);
                this.lacquerSum.push(...summary['ns1:LacquerCosts']['ns1:Material']['ns1:LacquerConstants']['ns1:LacquerConstant']);
                summary['ns1:LacquerCosts']['ns1:Material']['ns1:MaterialGroups']['ns1:LacquerMaterialGroupSummary'].forEach(item => item['ns1:Description'] = item['ns1:Name']);
                this.lacquerSum.push(...summary['ns1:LacquerCosts']['ns1:Material']['ns1:MaterialGroups']['ns1:LacquerMaterialGroupSummary']);
                this.lacquerSum.forEach(element => {
                    element['ns1:Duration'] = element['ns1:Units']
                    element['ns1:ValueTotalCorrected'] = element['ns1:Price']
                });

                this.lacquerSumTotal = summary['ns1:LacquerCosts']['ns1:TotalSum'];

                this.finalSum = [{
                    'ns1:Description': 'RepairCost | header',
                    'ns1:TotalNetCosts': summary['ns1:TotalNetCosts'],
                    'ns1:TotalVAT': summary['ns1:TotalVAT'],
                    'ns1:TotalGrossCosts': summary['ns1:TotalGrossCosts']
                }];
                this.finalSumTotal = summary['ns1:TotalGrossCosts'];

                this.dataProcessed = true;
            }
            reader.readAsText($img.files[0]);
            this.fileSelected = true;
        }
    }
    
    labourReplacement = {
        'CAR BODY': 'BodyWork | header',
        'ELECTRIC': 'Electrics | header',
        'MECHANIC': 'MechanicalSystems | header'
    };
}