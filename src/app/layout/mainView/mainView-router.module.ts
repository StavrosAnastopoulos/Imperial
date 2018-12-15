import { InvoiceCheckComponent } from "./invoiceCheck/invoiceCheck.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ReportGenerationComponent } from "./reportGeneration/reportGeneration.component";

const mainViewRoutes: Routes = [
    {
        path: 'invoice-check',
        component: InvoiceCheckComponent
    },
    {
        path: 'dashboard',
        // path: 'generate-report',
        component: ReportGenerationComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(mainViewRoutes)],
    exports: [RouterModule]
  })
  export class MainViewRoutingModule { }