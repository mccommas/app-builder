import { Component, OnInit } from '@angular/core';
import { Transition } from 'ui-router-ng2';
import { LoginService } from './login.service';
import { HttpService } from './../../shared/services/http.service';
import { ConstantService } from './../../shared/services/constant.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, HttpService, ConstantService]
})
export class LoginComponent implements OnInit {
  public userPassword: any;
  constructor(private loginService: LoginService, private transition: Transition) { }

  ngOnInit() {
  }
  login(model, isValid) {
    this.loginService.doLogin().map(r => r.json())
      .subscribe(data => {
        if (data) {
          if (data.email == model.useremail && data.password == model.userpassword) {
            this.transition.router.stateService.go('dashboard');
          } else {
            alert("Invalid Credentials");
          }
        }
      });
  }

}
