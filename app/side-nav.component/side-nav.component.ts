import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {DashboardComponent} from '../../app/dashboard.component/dashboard.component';

@Component({
    selector:'side-nav',
    styleUrls:['app/side-nav.component/side-nav.component.css'],
    templateUrl:'app/side-nav.component/side-nav.component.html',
    directives:[ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS]        
})


export class SideNavComponent{
    
}