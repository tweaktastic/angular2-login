/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var app_component_1 = require('./app.component');
browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS]);
