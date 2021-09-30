import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TableSplitService, TableData, Row } from '../../shared/table/table-split.service';

export const trimNameSpace = (temp: any): any => {
    Object.keys(temp).forEach(key => {
        if (key === '#text') {
            delete temp['#text'];
        } else {
            if (typeof(temp[key]) === 'object') {
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

export interface DatEquipmentPosition {
    DatEquipmentId: number;
    Description: string;
    AddedByLogikCheck: boolean;
}

@Injectable()
export class ImperialDataProcessingService {
    constructor (
        private _tableService: TableSplitService,
        private translateService: TranslateService,
    ) {}

    private currency: string = 'EUR';

    process = (data: any) => {
        this._tableService.startSession();

        let additionalInfo = {};
        let ownerInfo: any = {};
        let dealerInfo: any = {};
        let expertInfo: any = {};
        let vehicleInfo: any = {};
        let pages = [];

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
        let lang = data['Language'];
        if (!lang || lang == 'el_GR') {
            lang = 'el';
        }
        if (lang != this.translateService.currentLang) {
            this.translateService.use(lang);
        }
        this.currency = (data['Currency'] || 'EUR');
        
        additionalInfo['Name'] = data['Name'];
        additionalInfo['Description'] = data['Description'];
        additionalInfo['CreateDate'] = data['CreateDate'];
        additionalInfo['ChangeDate'] = data['ChangeDate'];
        additionalInfo['DamageDate'] = data['RepairOrder']['DamageDate'];
        dealerInfo = (data['TradingData'] || {})['Dealership'] || {};
        expertInfo = (data['TradingData'] || {})['Expert'] || {};
        ownerInfo = (data['TradingData'] || {})['Owner'] || {};
        vehicleInfo = data['Vehicle'] || {};

        // -- SeriesEquipment
        try {
            const eqPos: DatEquipmentPosition[] = vehicleInfo['Equipment']['SeriesEquipment']['EquipmentPosition'];
            this._tableService.addTable(<TableData>{
                title: 'SeriesEquipment',
                rows: [
                    {type: 'header', persist: true, cells: [{value: 'Description'}]},
                    ...eqPos.map(e => ({type: 'row', cells: [{value: e.Description}]}))
                ]
            });
        } catch (e) {
            console.log('could not read Series Equipment');
        }
        // -- SpecialEquipment
        try {
            const eqPos: DatEquipmentPosition[] = vehicleInfo['Equipment']['SeriesEquipment']['EquipmentPosition'];
            this._tableService.addTable(<TableData>{
                title: 'SpecialEquipment',
                rows: [
                    {type: 'header', persist: true, cells: [{value: 'Description'}]},
                    ...eqPos.map(e => ({type: 'row', cells: [{value: e.Description}]}))
                ]
            });
        } catch (e) {
            console.log('could not read Special Equipment');
        }

        vehicleInfo['Color'] = (vehicleInfo['Equipment'] || {})['Color'];
        delete vehicleInfo['Equipment'];

        this._tableService.switchPage();

        const repaireWages = (data['RepairCalculation'] || {})['RepairWages'];

         const details = (data['RepairCalculation'] || {})['CalcResultCommon'] || null;
         if (details) {

            // -- Material Positions
            try {
                let materialInfo = (details['MaterialPositions'] || {})['MaterialPosition'];
                
                if (materialInfo) {
                    if (!materialInfo.length) {
                        materialInfo = [materialInfo];
                    }
                    this._tableService.addTable(<TableData>{
                        title: 'SpareParts',
                        rows: [
                            {type: 'header', persist: true, cells: [{value: 'PartNumber'}, {value: 'Description', width: 40}, {value: 'ValuePerUnit'}, {value: 'Amount'}, {value: 'ValueTotalCorrected'}]},
                            ...(materialInfo as any[]).map(e =>
                                ({type: 'row', cells: [{value: e['PartNumber']}, {value: e['Description'], width: 40}, {value: e['ValuePerUnit']}, {value: e['Amount']}, {value: e['ValueTotalCorrected']}]})
                            )
                        ]
                    });
                }
            } catch (e) {
                console.log('could not read Material Positions');
            }

            // -- Additional Costs Positions
            try {
                let additionalCostsInfo = (details['AdditionalCostsPositions'] || {})['AdditionalCostsPosition'];
                if (additionalCostsInfo) {
                    if (!additionalCostsInfo.length) {
                        additionalCostsInfo = [additionalCostsInfo];
                    }
                    additionalCostsInfo.forEach((item: any) => {
                        if (!item['ValueTotalCorrected']) {
                            item['ValueTotalCorrected'] = item['ValueTotal'];
                        }
                    });
                    this._tableService.addTable(<TableData>{
                        title: 'AdditionalCosts',
                        rows:[
                            {type: 'header', persist: true, cells: [{value: 'Description', width: 40}, {value: 'ValueTotalCorrected'}]},
                            ...(additionalCostsInfo as any[]).map(e =>
                                ({type: 'row', cells: [{value: e['Description'], width: 40}, {value: e['ValueTotalCorrected']}]})
                            )
                        ]
                    });
                }
            } catch (e) {
                console.log('could not read Additional Costs Positions');
            }

            // -- Labour Positions
            try {
                let labourInfo = (details['LabourPositions'] || {})['LabourPosition'];
                const rows: Row[] = [];
                if (labourInfo) {
                    if (!labourInfo.length) {
                        labourInfo = [labourInfo];
                    }
                    rows.push({type: 'header', persist: true, cells: [{value: 'LabourPosId'}, {value: 'Description', width: 40}, {value: 'WageLevel'}, {value: 'Duration'}, {value: 'ValueTotalCorrected'}]});
                    for (const e of labourInfo) {
                        rows.push({type: 'row', cells: [{value: e['LabourPosId']}, {value: e['Description'], width: 40}, {value: e['WageLevel']}, {value: e['Duration']}, {value: e['ValueTotalCorrected']}]});
                    }
                }

                // -- Dent Positions
                try {
                    let dentInfo = (details['LabourPositions'] || {})['DentBvatPosition'];
                    if (dentInfo) {
                        if (!dentInfo.length) {
                            dentInfo = [dentInfo];
                        }
                        rows.push({type: 'header', persist: true, cells: [{value: 'PAINTLESS_DENT_REPAIR_HALL_DAMAGE_CENTRE'}]});
                        rows.push({type: 'header', persist: true, cells: [{value: 'Description', width: 40}, {value: "MUBER_OF_DENTS"}, {value: 'Duration'}, {value: 'ValueTotalCorrected'}]});
                        for (const e of dentInfo) {
                            rows.push({type: 'row', cells: [{value: e['Description'], width: 40}, {value: e['Amount']}, {value: e['Duration']}, {value: e['ValueTotalCorrected']}]});
                        }
                    }
                } catch (e) {
                    console.log('could not read Dent Positions');
                }

                this._tableService.addTable(<TableData>{ title: 'Labour', rows });

            } catch (e) {
                console.log('could not read Labour Positions');
            }

            // -- Lacquer Positions
            try {
                let lacquerInfo = (details['LacquerPositions'] || {})['LacquerPosition'];
                if (lacquerInfo) {
                    if (!lacquerInfo.length) {
                        lacquerInfo = [lacquerInfo];
                    }
                    lacquerInfo.forEach((item: any) => {
                        item['WagePrice'] = (repaireWages['Lacquer'] || 30) * item['Duration'];
                        item['WageLevel'] = item['LabourPosId'];
                    });
                    this._tableService.addTable(<TableData>{
                        title: 'Lacquer',
                        rows: [
                            {type: 'header', persist: true, cells: [{value: 'WageLevel'}, {value: 'Description', width: 40}, {value: 'Material'}, {value: 'Duration'}, {value: 'WagePrice'}, {value: 'ValueTotalCorrected'}]},
                            ...(lacquerInfo as any[]).map(e =>
                                ({type: 'row', cells: [{value: e['WageLevel']}, {value: e['Description'], width: 40},{value:  e['Material']}, {value: e['Duration']}, {value: e['WagePrice']}, {value: e['ValueTotalCorrected']}]})
                            )
                        ]
                    });
                }
            } catch (e) {
                console.log('could not read Lacquer Positions');
            }

            // -- Discount Positions
            try {
                let discountInfo = (details['DiscountPositions'] || {})['DiscountPosition'];
                if (discountInfo) {
                    if (!discountInfo.length) {
                        discountInfo = [discountInfo];
                    }
                    this._tableService.addTable(<TableData>{
                        title: 'Discount',
                        rows: [
                            {type: 'header', persist: true, cells: [{value: 'Description', width: 40}, {value: 'BaseValue'}, {value: 'CorrectionPercentage'}, {value: 'ValueTotalCorrected'}]},
                            ...(discountInfo as any[]).map(e =>
                                ({type: 'row', cells: [{value: e['Description'], width: 40}, {value: e['BaseValue']}, {value: e['CorrectionPercentage']}, {value: e['CorrectionValue']}]})
                            )
                        ]
                    });
                }
            } catch (e) {
                console.log('could not read Discount Positions');
            }

            this._tableService.switchPage();
         }

         // summary
         const summary = (data['RepairCalculation'] || {})['CalculationSummary'];
         if (summary && Object.keys(summary).length > 0) {
            const auxiliaryCosts = summary['AuxiliaryCosts'];
            if (auxiliaryCosts) {
                this._tableService.addTable(<TableData>{
                    title: 'AdditionalCostsSum',
                    price: auxiliaryCosts['TotalSum']
                });
            }

            // -- Spare Parts Summary
            try {
                const sparepats = summary['SparePartsCosts'];
                let sparePartTotal: number = 0;
                if (sparepats) {
                    sparePartTotal = sparepats['TotalSum'];
                    this._tableService.addTable(<TableData>{
                        title: 'SumBlockSpareParts',
                        price: sparePartTotal,
                        rows: [
                            {type: 'header', persist: true, cells: [{value: 'Description', width: 40}, {value: 'AllSum'}, {value: 'ConsumablesSurcharge'}, {value: 'ValueTotalCorrected'}]},
                            {type: 'row', cells: [{value: this.translateService.stream('SparePartsSum'), width: 40, isAsync: true}, {value: sparepats['AllSum']}, {value: sparepats['ConsumablesSurcharge']}, {value: sparepats['TotalSum']}]}
                        ]
                    });
                }
            } catch (e) {
                console.log('could not read Spare Parts Summary');
            }

            // -- Labour Cost Summary
            try {
                if (summary['LabourCosts']) {
                    let labourSumTotal = summary['LabourCosts']['TotalSum'];
                    delete summary['LabourCosts']['TotalSum'];
                    const labourSum: any[] = [];
                    Object.keys(summary['LabourCosts']).forEach(key => labourSum.push(summary['LabourCosts'][key]));

                    this._tableService.addTable(<TableData>{
                        title: 'SumBlockWage',
                        price: labourSumTotal,
                        rows: [
                            {type: 'header', persist: true, cells: [{value: 'Description', width: 40}, {value: 'Duration'}, {value: 'PricePerUnit'}, {value: 'ValueTotalCorrected'}]},
                            ...labourSum.map(e =>
                                ({type: 'row', cells: [{value: this.translateService.stream(e['Type']), width: 40, isAsync: true}, {value: e['Units']}, {value: e['PricePerUnit']}, {value: e['Price']}]})
                            )
                        ]
                    });
                }
            } catch (e) {
                console.log('could not read Labour Cost Summary');
            }

            // -- Lacquer Cost Summary
            try {
                if (summary['LacquerCosts']) {
                    let lacquerSumTotal = summary['LacquerCosts']['TotalSum'];
                    const rows: Row[] = [];

                    const wage = summary['LacquerCosts']['Wage'];
                    if (wage != null) {
                        rows.push({type: 'header', persist: true, cells: [{value: 'wageCost', width: 40}, {value: 'Duration'}, {value: 'PricePerUnit'}, {value: 'ValueTotalCorrected'}]});
                        rows.push({type: 'row', cells: [{value: this.translateService.stream('laquerWork'), width: 40, isAsync: true}, {value: wage['Unit']}, {value: wage['PricePerUnit']}, {value: wage['Price']}]});
                    }

                    const material = summary['LacquerCosts']['Material'];
                    if (material != null) {
                        rows.push({type: 'header', persist: true, cells: [{value: 'material', width: 40}, {value: 'sumMaterialUnits'}, {value: 'materialUnitPrice'}, {value: 'ValueTotalCorrected'}]})
                        let constant = (material['LacquerConstants'] || {})['LacquerConstant'];
                        delete material['LacquerConstants'];
                        const overhauling = summary['LacquerCosts']['Material']['Overhauling'];
                        if (overhauling != null) {
                            rows.push({type: 'row', cells: [{value: this.translateService.stream(overhauling['Type']), width: 40, isAsync: true}, {value: overhauling['Unit']}, {value: overhauling['PricePerUnit']}, {value: overhauling['Price']}]});
                        }
                        const replacement = summary['LacquerCosts']['Material']['Replacement'];
                        if (replacement != null) {
                            rows.push({type: 'row', cells: [{value: this.translateService.stream(replacement['Type']), width: 40, isAsync: true}, {value: replacement['Unit']}, {value: replacement['PricePerUnit']}, {value: replacement['Price']}]});
                        }
                        if ((summary['LacquerCosts']['Material']['MaterialGroups'] || {})['LacquerMaterialGroupSummary']) {
                            let lacquerMaterialGroupSummary =
                            summary['LacquerCosts']['Material']['MaterialGroups']['LacquerMaterialGroupSummary'];
                            if (lacquerMaterialGroupSummary != null) {
                                if (!lacquerMaterialGroupSummary.length) {
                                    lacquerMaterialGroupSummary = [lacquerMaterialGroupSummary];
                                }
                                rows.push(
                                    ...(lacquerMaterialGroupSummary as any[]).map(e =>
                                        ({type: 'row' as 'row', cells: [{value: e['Name'], width: 40}, {value: e['Unit']}, {value: e['PricePerUnit']}, {value: e['Price']}]})
                                    )
                                );
                            }
                        }
                        if (constant != null) {
                            if (!constant.length) {
                                constant = [constant];
                            }

                            rows.push(
                                ...(constant as any[]).map(e =>
                                    ({type: 'row' as 'row', cells: [{value: e['Description'], width: 40}, {value: '-'}, {value: '-'}, {value: e['Price']}]})
                                )
                            );
                        }
                    }

                    this._tableService.addTable(<TableData>{
                        title: 'SumBlockLacquer',
                        price: lacquerSumTotal,
                        rows
                    });
                }
            } catch (e) {
                console.log('could not read Lacquer Cost Summary');
            }

            // -- Final Summary
            try {
                const rows: Row[] = [{type: 'header', persist: true, cells: [{value: 'Description', width: 40}, {value: 'TotalNetCosts'}, {value: 'TotalVAT'}, {value: 'TotalGrossCosts'}]}];
                rows.push({type: 'row', cells: [{value: this.translateService.stream('RepairCost'), width: 40, isAsync: true}, {value: summary['TotalNetCosts']}, {value: summary['TotalVAT']}, {value: summary['TotalGrossCosts']}]});
                if (summary['TotalNetDiscount']) {
                    rows.push({type: 'row', cells: [{value: this.translateService.stream('Discount'), width: 40, isAsync: true}, {value: summary['TotalNetDiscount']}, {value: summary['TotalVATDiscount']}, {value: summary['TotalGrossDiscount']}]});
                }
                if (summary['TotalNetCorrected']) {
                    rows.push({type: 'row', cells: [{value: this.translateService.stream('CorrectedRepairCost'), width: 40, isAsync: true}, {value: summary['TotalNetCorrected']}, {value: summary['TotalVATCorrected']}, {value: summary['TotalGrossCorrected']}]});
                }
                const finalSumTotal = summary['TotalGrossCorrected'] || summary['TotalGrossCosts'];
                this._tableService.addTable(<TableData>{
                    title: 'CostSummary',
                    price: finalSumTotal,
                    rows
                });
            } catch (e) {
                console.log('could not read Final Summary');
            }
        }

        pages = this._tableService.endSession();

        return {additionalInfo, ownerInfo, dealerInfo, expertInfo, vehicleInfo, pages};
    }

}
