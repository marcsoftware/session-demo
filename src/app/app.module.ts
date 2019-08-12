import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlankComponent } from './blank/blank.component';
import { SessionService } from './session.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlankComponent


  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [CookieService, SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
