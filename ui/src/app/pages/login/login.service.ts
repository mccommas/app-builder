import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConstantService } from './../../shared/services/constant.service';
import { HttpService } from './../../shared/services/http.service';

@Injectable()
export class LoginService {
    meUser;
    dataObj: any;
    constructor(private httpService: HttpService, private constantService: ConstantService) { }
    doLogin = function () {
        return this.httpService.http_post(this.constantService.requestApi.login, null);
    };  
}