import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { EquipmentGenerationComponent } from './equipment-generation.component';

const routes: Routes = [
    {
        path: '',
        component: EquipmentGenerationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}

@NgModule({
    imports: [SharedModule, RoutingModule, TranslateModule.forChild({ extend: true })],
    declarations: [EquipmentGenerationComponent],
})
export class EquipmentReportModule {}