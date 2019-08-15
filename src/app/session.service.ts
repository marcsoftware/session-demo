import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _sessionId: string;

  constructor(public cookieService: CookieService) {


    this.cookieService.set('sessionId', this._sessionId);
  }

  getToken() {

    return this.cookieService.get('token');
  }


  setToken(x: string) {
     this._sessionId=x;
     let date = new Date();
     date.setDate( date.getDate() + 1000 );//cookie expires in 1000 days
     this.cookieService.set('token', this._sessionId,date);
  }

  setName(x: string) {
    this._sessionId=x;
    let date = new Date();
    date.setDate( date.getDate() + 1000 );//cookie expires in 1000 days
    this.cookieService.set('name', this._sessionId,date);
 }

}
