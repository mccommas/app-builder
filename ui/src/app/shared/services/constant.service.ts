import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  localEnvironment: boolean = true;
  apiUrl: string = 'http://localhost:8181/';
  requestApi = {
    login: 'login'
  };
  localJsonResource = {
    login: 'data/login.json'
  };
  getRequestUrl = function (action) {
    return this.apiUrl + this.requestApi[action];
  };
  constructor() { }
}
