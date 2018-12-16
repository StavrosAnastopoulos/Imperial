import { InvoiceCheckComponent } from "./invoiceCheck/invoiceCheck.component";
import { ReportGenerationComponent } from "./reportGeneration/reportGeneration.component";
import { ClientInfoComponent } from "./reportGeneration/clientInfo/clientInfo.component";
import { TableInfoComponent } from "./reportGeneration/table/tableInfo.component";
import { TableInfoPipe, TableHeaderPipe } from "./reportGeneration/table/tableInfo.pipe";
import { ReportTitleComponent } from "./reportGeneration/title/report-title.component";
import { DamageCardComponent } from "./reportGeneration/damageCard/damage-card.component";
import { InvoicePanelComponent } from "./invoiceCheck/invoicePanel/invoicePanel.component";
import { CanvasComponent } from "./invoiceCheck/canvas.component";
import { WelcomComponent } from "./welcomeScreen/welcomeScreen.component";

export const Pipes = [TableInfoPipe, TableHeaderPipe];
export const Components = [
    InvoiceCheckComponent,
    ReportGenerationComponent,
    ClientInfoComponent,
    TableInfoComponent,
    ReportTitleComponent,
    DamageCardComponent,
    InvoicePanelComponent,
    CanvasComponent,
    WelcomComponent
];
