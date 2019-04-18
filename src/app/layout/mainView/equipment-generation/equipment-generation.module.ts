import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EquipmentService } from './equipiment-only.service';
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
    imports: [SharedModule, RoutingModule],
    declarations: [EquipmentGenerationComponent],
    providers: [EquipmentService]
})
export class EquipmentReportModule {}