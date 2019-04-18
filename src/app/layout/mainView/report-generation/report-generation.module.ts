import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportGenerationComponent } from './report-generation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImperialDataProcessingService } from './imperial-data-processing.service';
import { ClientInfoComponent } from './clientInfo/clientInfo.component';
import { DamageCardComponent } from './damageCard/damage-card.component';

const routes: Routes = [
    {
        path: '',
        component: ReportGenerationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}

@NgModule({
    imports: [SharedModule, RoutingModule],
    declarations: [ReportGenerationComponent, ClientInfoComponent, DamageCardComponent],
    providers: [ImperialDataProcessingService]
})
export class ReportGenerationModule {}