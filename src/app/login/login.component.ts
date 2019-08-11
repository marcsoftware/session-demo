import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  clickMessage = '';
  private _sessionId: string;

  constructor(private cookieService: CookieService) {
      this._sessionId= "harcoded";
      this.cookieService.set("sessionId", this._sessionId);
  }

  ngOnInit() {
  }



  onClickMe(private cookieService: CookieService) {

    this.clickMessage = this.cookieService.get("sessionId");
  }







}
