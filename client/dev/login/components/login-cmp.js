"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var login_service_1 = require('../services/login-service');
var login_validator_1 = require('./login-validator');
var LoginCmp = (function () {
    function LoginCmp(_loginBuilder) {
        this._loginBuilder = _loginBuilder;
        this.title = "Login";
        this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, login_validator_1.LoginValidations.invalidEmail]));
        this.password = new common_1.Control('', common_1.Validators.required);
        this.loginForm = _loginBuilder.group({
            email: this.email,
            password: this.password
        });
    }
    LoginCmp.prototype.ngOnInit = function () {
        /**
          ToDo check already logged in user and redirect to branch selection page
        **/
    };
    LoginCmp.prototype.submitData = function () {
        console.log(JSON.stringify(this.loginForm.value));
    };
    LoginCmp = __decorate([
        core_1.Component({
            selector: 'login-cmp',
            templateUrl: 'client/dev/login/templates/login.html',
            styleUrls: ['client/dev/login/styles/login.css'],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], LoginCmp);
    return LoginCmp;
}());
exports.LoginCmp = LoginCmp;
