import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecordWithTtl } from 'dns';
import { RequestLogin } from 'src/app/models/RequestLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public title = 'Login';

  public requestLogin!: RequestLogin;


  constructor() {
   }

  ngOnInit() {
    this.requestLogin = new RequestLogin();
  }

}
