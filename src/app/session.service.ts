import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _sessionId: string;

  constructor(public cookieService: CookieService) {
    let date = new Date();
    date.setDate( date.getDate() + 1000 );//cookie expires in 1000 days

    this.cookieService.set('sessionId', this._sessionId,date);
  }

  getToken() {

    return this.cookieService.get('sessionId');
  }


  setToken(x: string) {
     this._sessionId=x;
     this.cookieService.set('sessionId', this._sessionId);
  }

}
