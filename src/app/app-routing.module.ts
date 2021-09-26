import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {
        path: 'invoice-check',
        loadChildren: () => import('./pages/invoice-check/invoice-check.module').then(m => m.InvoiceCheckModule)
    },
    {
        path: 'generate-report',
        loadChildren: () => import('./pages/report-generation/report-generation.module').then(m => m.ReportGenerationModule)
    },
    {
        path: 'generate-report-dekra',
        loadChildren: () => import('./pages/dekra-report-generation/dekra-report-generation.module').then(m => m.DekraReportGenerationModule)
    },
    {
        path: 'generate-report-equipment',
        loadChildren: () => import('./pages/equipment-generation/equipment-generation.module').then(m => m.EquipmentReportModule)
    },
    {
        path: 'welcome',
        component: DashboardComponent
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

export const routableComponents = [ ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
