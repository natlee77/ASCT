import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Config } from '../models/config';
// import { ConfigService } from '../services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  config: Config | undefined;
  adminLoginUrl: string | undefined;
  clientLoginUrl: string | undefined;
  apiBaseUrl: string | undefined;

  constructor(/* private configSvc: ConfigService */) {

    // this.configSvc.getConfig().subscribe((data: Config) => this.config = {
    //   apiBaseUrl: data.apiBaseUrl,
    //   adminLoginUrl: data.adminLoginUrl,
    //   clientLoginUrl: data.clientLoginUrl
    // })
  }


  ngOnInit(): void {
    //TODO: if user has token, send to welcome
  }

}
