import { NgModule } from '@angular/core';
import * as Layout from './index'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainViewModule } from './mainView/mainView.module';

@NgModule({
    imports: [CommonModule, RouterModule, MainViewModule],
    declarations: [Layout.Components],
    exports: [Layout.Components, MainViewModule]
})
export class LayoutModule {}