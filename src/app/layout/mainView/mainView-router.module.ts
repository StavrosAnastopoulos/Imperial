import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WelcomComponent } from './welcomeScreen/welcomeScreen.component';

const mainViewRoutes: Routes = [
    {
        path: 'invoice-check',
        loadChildren: './invoice-check/invoice-check.module#InvoiceCheckModule'
    },
    {
        path: 'generate-report',
        loadChildren: './report-generation/report-generation.module#ReportGenerationModule'
    },
    {
        path: 'generate-report-dekra',
        loadChildren: './dekra-report-generation/dekra-report-generation.module#DekraReportGenerationModule'
    },
    {
        path: 'generate-report-equipment',
        loadChildren: './equipment-generation/equipment-generation.module#EquipmentReportModule'
    },
    {
        path: 'welcome',
        component: WelcomComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(mainViewRoutes)],
    exports: [RouterModule]
})
export class MainViewRoutingModule { }