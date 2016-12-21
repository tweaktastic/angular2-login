import {Component} from  'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {LoginCmp} from './login/components/login-cmp';

@Component({
    selector : 'forward-app',
    template : '<router-outlet>',
    directives : ROUTER_DIRECTIVES,
    providers : ROUTER_PROVIDERS
})


@RouteConfig([
    {
        path : '/login',
        name : 'LOGIN',
        component : LoginCmp,
        useAsDefault : true
    }
])

export class AppComponent {
    //empty entry point class
}