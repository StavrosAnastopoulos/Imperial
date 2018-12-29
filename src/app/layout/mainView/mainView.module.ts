import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainViewRoutingModule } from './mainView-router.module';
import { SharedModule } from 'src/app/shared/shared.module';
import * as View from './index';

@NgModule({
    imports: [RouterModule, MainViewRoutingModule, SharedModule],
    declarations: [View.Components],
    exports: [View.Components]
})
export class MainViewModule {}