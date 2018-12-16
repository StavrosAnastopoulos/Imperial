import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: '404' }
];

export const routableComponents = [ ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
