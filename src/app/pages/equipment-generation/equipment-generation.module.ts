import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '../../shared/shared.module';
import { EquipmentGenerationComponent } from './equipment-generation.component';

const routes: Routes = [
    {
        path: '',
        component: EquipmentGenerationComponent
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
        TranslateModule.forChild({ extend: true, loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
        }),
        SharedModule
    ],
    declarations: [EquipmentGenerationComponent],
})
export class EquipmentReportModule {}