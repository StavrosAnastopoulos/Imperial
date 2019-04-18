import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainViewRoutingModule } from './mainView-router.module';
import * as View from './index';

@NgModule({
    imports: [RouterModule, MainViewRoutingModule],
    declarations: [View.Components],
    exports: [View.Components],
    entryComponents: [View.EntryComponents]
})
export class MainViewModule {}