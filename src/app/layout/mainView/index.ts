import { InvoiceCheckComponent } from "./invoiceCheck/invoiceCheck.component";
import { ReportGenerationComponent } from "./reportGeneration/reportGeneration.component";
import { ClientInfoComponent } from "./reportGeneration/clientInfo/clientInfo.component";
import { TableInfoComponent } from "./reportGeneration/table/tableInfo.component";
import { TableInfoPipe } from "./reportGeneration/table/tableInfo.pipe";

export const Pipes = [TableInfoPipe];
export const Components = [InvoiceCheckComponent, ReportGenerationComponent, ClientInfoComponent, TableInfoComponent];