import { Injectable } from '@angular/core';
import { TableSplitService, TableData } from '../../shared/table/table-split.service';
import { DatEquipmentPosition, trimNameSpace } from '../report-generation/imperial-data-processing.service';

@Injectable()
export class EquipmentService {
    constructor (
        private _tableService: TableSplitService
    ) {}
    process = (data: any) => {
        this._tableService.startSession();

        if (data['S:Envelope']) {
            data = data['S:Envelope']['S:Body'];
            data = data[Object.keys(data)[1]]['return'];
            data = trimNameSpace(data['ns1:Dossier']);
        } else if (data['ns2:Dossiers']) {
            data = trimNameSpace(data['ns2:Dossiers']['ns2:Dossier']);
        }
        const vehicleInfo = data['Vehicle'] || {};

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

        return this._tableService.endSession();
    }
}