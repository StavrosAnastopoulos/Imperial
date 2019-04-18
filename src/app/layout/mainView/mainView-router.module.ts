import { InvoiceCheckComponent } from './invoiceCheck/invoiceCheck.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportGenerationComponent } from './reportGeneration/reportGeneration.component';
import { WelcomComponent } from './welcomeScreen/welcomeScreen.component';
import { EquipmentGenerationComponent } from './equipmentGeneration/equipmentGeneration.component';

const mainViewRoutes: Routes = [
    {
        path: 'invoice-check',
        component: InvoiceCheckComponent
    },
    {
        path: 'generate-report',
        component: ReportGenerationComponent
    },
    {
        path: 'generate-report-equipment',
        component: EquipmentGenerationComponent
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