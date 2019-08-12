import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _sessionId: string;

  constructor(public cookieService: CookieService) {
    this._sessionId = 'harcoded';
    this.cookieService.set('sessionId', this._sessionId);
  }

  getToken() {

    return this.cookieService.get('sessionId');
  }


  setToken(x: string) {
     this._sessionId=x;
     this.cookieService.set('sessionId', this._sessionId);
  }

}
