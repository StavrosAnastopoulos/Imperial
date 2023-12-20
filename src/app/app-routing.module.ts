import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    // {
    //     path: 'invoice-check',
    //     loadComponent: () => import('./pages/invoice-check/invoice-check.component').then(c => c.InvoiceCheckComponent)
    // },
    {
        path: 'generate-report',
        loadComponent: () => import('./pages/report-generation/report-generation.component').then(c => c.ReportGenerationComponent)
    },
    {
        path: 'generate-report-dekra',
        loadComponent: () => import('./pages/dekra-report-generation/dekra-report-generation.component').then(c => c.DekraReportGenerationComponent)
    },
    {
        path: 'generate-report-avus',
        loadComponent: () => import('./pages/avus-report-generation/avus-report-generation.component').then(c => c.AvusReportGenerationComponent)
    },
    {
        path: 'generate-report-equipment',
        loadComponent: () => import('./pages/equipment-generation/equipment-generation.component').then(c => c.EquipmentGenerationComponent),
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
