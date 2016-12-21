/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';

import {LoginCmp} from './login/components/login-cmp';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);