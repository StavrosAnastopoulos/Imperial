import { Injectable } from '@angular/core';
import { LocaleService } from 'src/app/shared/locale.service';
import { TableSplitService, TableData } from 'src/app/shared/table/table-split.service';

const trimNameSpace = (temp: any): any => {
    Object.keys(temp).forEach(key => {
        if (key == '#text') {
            delete temp['#text'];
        } else {
            if (typeof(temp[key]) == 'object') {
                temp[key] = trimNameSpace(temp[key]);
            }
            if (key.includes(':')) {
                temp[key.split(':')[1]] = temp[key];
                delete temp[key];
            }
        }
    });
    return temp;
};

const labourReplacement = {
    'CAR BODY': 'BodyWork | header',
    'ELECTRIC': 'Electrics | header',
    'MECHANIC': 'MechanicalSystems | header'
};

@Injectable({
    providedIn: 'root'
})
export class ImperialDataProcessingService {

    constructor (
        private localeService: LocaleService,
        private _tableService: TableSplitService
    ) {}

    process = (data: any) => {
        this._tableService.startSession();

        let additionalInfo = {};
        let ownerInfo: any = {};
        let dealerInfo: any = {};
        let expertInfo: any = {};
        let vehicleInfo: any = {};
        let pages = [];

        let serierEq: any = {};
        const serierEqHeader = 'SeriesEquipment';
        let specialEq: any = {};
        const specialEqHeader = 'SpecialEquipment';
        const equipmentPointer = ['Description'];

        let materialInfo: any = {};
        const materialHeader = 'SpareParts';
        const materialPointers = ['PartNumber', 'Description', 'ValuePerUnit', 'Amount', 'ValueTotalCorrected'];

        let labourInfo: any = {};
        const labourHeader = 'Labour';
        const labourPointers = ['LabourPosId', 'Description', 'WageLevel', 'Duration', 'ValueTotalCorrected'];

        let lacquerInfo: any = {};
        const lacquerHeader = 'Lacquer';
        const lacquerPointers = ['WageLevel', 'Description', 'Material', 'Duration', 'WagePrice', 'ValueTotalCorrected'];

        let sparePartSum: any = {};
        const sparePartHeader = 'SumBlockSpareParts';
        const sparePartPointers = ['Description', 'AllSum', 'ConsumablesSurcharge', 'ValueTotalCorrected'];
        let sparePartTotal: number;

        const labourSum: any = [];
        const labourSumHeader = 'SumBlockWage';
        const labourSumPointers = ['Description', 'Duration', 'PricePerUnit', 'ValueTotalCorrected'];
        let labourSumTotal: number;

        const lacquerSum: any = [];
        const lacquerSumHeader = 'SumBlockLacquer';
        const lacquerSumPointers = ['Description', 'Duration', 'PricePerUnit', 'ValueTotalCorrected'];
        let lacquerSumTotal: number;

        let finalSum: any = [];
        const finalSumHeader = 'CostSummary';
        const finalSumPointers = ['Description', 'TotalNetCosts', 'TotalVAT', 'TotalGrossCosts'];
        let finalSumTotal: number;

        if (data['S:Envelope']) {
            data = data['S:Envelope']['S:Body'];
            data = data[Object.keys(data)[1]]['return'];

            const temp = data['customTemplateData']['entry'];
            Object.keys(temp).forEach(item => additionalInfo[temp[item]['key']] = temp[item]['value']);
            data = trimNameSpace(data['ns1:Dossier']);
        } else if (data['ns2:Dossiers']) {
            data = trimNameSpace(data['ns2:Dossiers']['ns2:Dossier']);
        }

         // client info page
         this.localeService.setLocal(data['Language']);
         this.localeService.setCurrency(data['Currency']);
         dealerInfo = data['TradingData']['Dealership'];
         expertInfo = data['TradingData']['Expert'];
         ownerInfo = data['TradingData']['Owner'];
         vehicleInfo = data['Vehicle'];
         serierEq = (vehicleInfo['Equipment']['SeriesEquipment'] || {})['EquipmentPosition'] || [];
         specialEq = (vehicleInfo['Equipment']['SpecialEquipment'] || {})['EquipmentPosition'] || [];
        delete vehicleInfo['Equipment'];

         this._tableService.addTable(<TableData>{source: serierEq, pointers: equipmentPointer, title: serierEqHeader});
         this._tableService.addTable(<TableData>{source: specialEq, pointers: equipmentPointer, title: specialEqHeader});
         this._tableService.switchPage();

         // details
         const details = data['RepairCalculation']['CalcResultCommon'];
         materialInfo = details['MaterialPositions']['MaterialPosition'];
         if (!materialInfo.length) {
             materialInfo = [materialInfo];
        }

        labourInfo = details['LabourPositions']['LabourPosition'];
        if (!labourInfo.length) {
            labourInfo = [labourInfo];
        }

         lacquerInfo = details['LacquerPositions']['LacquerPosition'];
         if (!lacquerInfo.length) {
             lacquerInfo = [lacquerInfo];
        }
         lacquerInfo.forEach(item => {
             item['WagePrice'] = 30 * item['Duration'];
             item['WageLevel'] = item['LabourPosId'];
         });

        this._tableService.addTable(<TableData>{
             source: materialInfo,
             pointers: materialPointers,
             title: materialHeader
        });
        this._tableService.addTable(<TableData>{
             source: labourInfo,
             pointers: labourPointers,
             title: labourHeader
        });
        this._tableService.addTable(<TableData>{
             source: lacquerInfo,
             pointers: lacquerPointers,
             title: lacquerHeader
        });
         this._tableService.switchPage();

         // summary
         const summary = data['RepairCalculation']['CalculationSummary'];
         summary['SparePartsCosts']['Description'] = 'SparePartsSum | header';
         summary['SparePartsCosts']['ValueTotalCorrected'] = summary['SparePartsCosts']['TotalSum'];
         sparePartSum = [summary['SparePartsCosts']];
         sparePartTotal = summary['SparePartsCosts']['TotalSum'];

         labourSumTotal = summary['LabourCosts']['TotalSum'];
         delete summary['LabourCosts']['TotalSum'];
         Object.keys(summary['LabourCosts']).forEach(key => labourSum.push(summary['LabourCosts'][key]));
         labourSum.forEach(element => {
             element['Description'] = labourReplacement[element['Type']];
             element['Duration'] = element['Units'];
             element['ValueTotalCorrected'] = element['Price'];
         });

         summary['LacquerCosts']['Wage']['Description'] = 'Wage | header';
         lacquerSum.push(summary['LacquerCosts']['Wage']);
         lacquerSum.push(...summary['LacquerCosts']['Material']['LacquerConstants']['LacquerConstant']);
         summary['LacquerCosts']['Material']['MaterialGroups']['LacquerMaterialGroupSummary']
            .forEach(item => item['Description'] = item['Name']);
         lacquerSum.push(...summary['LacquerCosts']['Material']['MaterialGroups']['LacquerMaterialGroupSummary']);
         lacquerSum.forEach(element => {
             element['Duration'] = element['Units'];
             element['ValueTotalCorrected'] = element['Price'];
         });

         lacquerSumTotal = summary['LacquerCosts']['TotalSum'];

         finalSum = [{
             'Description': 'RepairCost | header',
             'TotalNetCosts': summary['TotalNetCosts'],
             'TotalVAT': summary['TotalVAT'],
             'TotalGrossCosts': summary['TotalGrossCosts']
         }];
         finalSumTotal = summary['TotalGrossCosts'];

         this._tableService.addTable(<TableData>{
             source: sparePartSum,
             pointers: sparePartPointers,
             title: sparePartHeader,
             price: sparePartTotal
         });
         this._tableService.addTable(<TableData>{
             source: labourSum,
             pointers: labourSumPointers,
             title: labourSumHeader,
             price: labourSumTotal
         });
         this._tableService.addTable(<TableData>{
             source: lacquerSum,
             pointers: lacquerSumPointers,
             title: lacquerSumHeader,
             price: lacquerSumTotal
         });
         this._tableService.addTable(<TableData>{
             source: finalSum,
             pointers: finalSumPointers,
             title: finalSumHeader,
             price: finalSumTotal
         });

        pages = this._tableService.endSession();

        return {additionalInfo, ownerInfo, dealerInfo, expertInfo, vehicleInfo, pages};
    }

}
