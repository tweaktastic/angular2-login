import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {NgForm, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {LoginService} from '../services/login-service';
import {LoginValidations} from './login-validator';

@Component({
  selector: 'login-cmp',
  templateUrl: 'client/dev/login/templates/login.html',
  styleUrls: ['client/dev/login/styles/login.css'],
  providers: [LoginService]
})
export class LoginCmp implements OnInit {
  title: string = "Login";
  email : Control;
  password : Control;

  loginForm : ControlGroup;

  constructor(private _loginBuilder : FormBuilder){
    this.email = new Control('', Validators.compose([Validators.required, LoginValidations.invalidEmail]));
    this.password = new Control('', Validators.required);
    this.loginForm = _loginBuilder.group({
      email : this.email,
      password : this.password
    });
  }

  ngOnInit() {
    /** 
      ToDo check already logged in user and redirect to branch selection page
    **/
  }

  submitData(){
    console.log(JSON.stringify(this.loginForm.value));
  }

}
