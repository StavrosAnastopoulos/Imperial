import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportGenerationComponent } from './report-generation.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

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
    imports: [SharedModule, RoutingModule, TranslateModule.forChild({ extend: true })],
    declarations: [ReportGenerationComponent],
})
export class ReportGenerationModule {}
