import {
  Inject
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from 'angular2/http';

import 'rxjs/add/operator/map';

export class LoginService {
  static ENDPOINT: string = '/api/login/';

  constructor(@Inject(Http) private _http: Http) {

  }

  login(email:string, password:string) {
      /** 
        MAKE CALL TO NODE SERVER FOR LOGIN
      **/
  }
}
