"use strict";
var LoginValidations = (function () {
    function LoginValidations() {
    }
    LoginValidations.invalidEmail = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value !== '' && !EMAIL_REGEXP.test(control.value)) {
            return { 'invalidEmail': true };
        }
        return null;
    };
    return LoginValidations;
}());
exports.LoginValidations = LoginValidations;
