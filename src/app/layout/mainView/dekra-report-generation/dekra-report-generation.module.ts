import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DekraReportGenerationComponent } from './dekra-report-generation.component';
import { ImperialDataProcessingService } from '../report-generation/imperial-data-processing.service';

const routes: Routes = [
    {
        path: '',
        component: DekraReportGenerationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}

@NgModule({
    imports: [SharedModule, RoutingModule],
    declarations: [DekraReportGenerationComponent],
    providers: [ImperialDataProcessingService]
})
export class DekraReportGenerationModule {}
