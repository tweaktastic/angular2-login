import {Control} from 'angular2/common';

interface ValidationResult{
    [key:string] : boolean;
}


export class LoginValidations{
    static invalidEmail(control:Control) : ValidationResult {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if(control.value !== '' && !EMAIL_REGEXP.test(control.value)){
            return {'invalidEmail' : true};
        }
        return null;
    }
}