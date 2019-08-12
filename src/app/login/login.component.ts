import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SessionService]
})


export class LoginComponent implements OnInit {

  buttonMessage = '';
name = 'x';
password = 'y';

  constructor(public sessionService: SessionService) {
     this.buttonMessage = sessionService.getToken();
  }

  onClickMe() {

   // this.clickMessage = sessionService.getToken();


  }

  login(){
      //  this.buttonMessage='logged in';
     this.sessionService.setToken(this.name);
     this.buttonMessage = this.sessionService.getToken();
  }

  ngOnInit() {
  }

}
