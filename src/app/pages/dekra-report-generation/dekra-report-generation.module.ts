import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DekraReportGenerationComponent } from './dekra-report-generation.component';
import { SharedModule } from '../../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        RoutingModule,
        TranslateModule.forChild({
            extend: true,
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        SharedModule
    ],
    declarations: [DekraReportGenerationComponent],
})
export class DekraReportGenerationModule {}
