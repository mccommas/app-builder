import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpService } from './../../shared/services/http.service';
import { ConstantService } from './../../shared/services/constant.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  login() { 
    alert("Doing login")
  }

}
