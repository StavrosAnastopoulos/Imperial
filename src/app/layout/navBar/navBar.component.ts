import { Component } from "@angular/core";
import { Router } from "@angular/router";

export interface NavItem {
    title: string;
    route: any;
}

@Component({
selector: 'imp-nav-bar',
templateUrl: 'navBar.component.html',
styleUrls: ['navBar.component.scss']
})
export class NavBarComponent {

availableAction: NavItem[] = [
    <NavItem>{title: 'Generate Report'},
    <NavItem>{title: 'Invoice Check'}
]

constructor(public _router: Router){}

}