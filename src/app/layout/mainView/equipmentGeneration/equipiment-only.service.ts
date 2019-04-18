import { Injectable } from '@angular/core';
import { TableSplitService, TableData } from 'src/app/shared/table/table-split.service';
import { trimNameSpace } from '../reportGeneration/imperial-data-processing.service';

@Injectable({
    providedIn: 'root'
})
export class EquipmentService {
    constructor (
        private _tableService: TableSplitService
    ) {}
    process = (data: any) => {
        this._tableService.startSession();

        let serierEq: any = {};
        const serierEqHeader = 'SeriesEquipment';
        let specialEq: any = {};
        const specialEqHeader = 'SpecialEquipment';
        const equipmentPointer = ['Description'];

        if (data['S:Envelope']) {
            data = data['S:Envelope']['S:Body'];
            data = data[Object.keys(data)[1]]['return'];
            data = trimNameSpace(data['ns1:Dossier']);
        } else if (data['ns2:Dossiers']) {
            data = trimNameSpace(data['ns2:Dossiers']['ns2:Dossier']);
        }
        const vehicleInfo = data['Vehicle'] || {};
        serierEq = ((vehicleInfo['Equipment'] || {})['SeriesEquipment'] || {})['EquipmentPosition'] || [];
        specialEq = ((vehicleInfo['Equipment'] || {})['SpecialEquipment'] || {})['EquipmentPosition'] || [];

        if (serierEq.length > 0) {
            this._tableService.addTable(<TableData>{source: serierEq, pointers: equipmentPointer, title: serierEqHeader});
        }
        if (specialEq.length > 0) {
            this._tableService.addTable(<TableData>{source: specialEq, pointers: equipmentPointer, title: specialEqHeader});
        }

        return this._tableService.endSession();
    }
}