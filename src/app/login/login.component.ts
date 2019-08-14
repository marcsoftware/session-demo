import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {Inject} from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SessionService]
})


export class LoginComponent implements OnInit {

  buttonMessage = '';
name = '-';
password = '-';
response='-';

 global_array=new Array();

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

  display(x){
    this.response=x;
  }
  testGet() {

    var xhttp = new XMLHttpRequest();
    var text ='testing';
    var yourArray=this.global_array;

    console.log(yourArray);
    this.response=yourArray[0];
    xhttp.onreadystatechange =function(y, x, text) {
      if (this.readyState === 4 && this.status === 200) {

        console.log('-------' + this.responseText);

        console.log(text);
        yourArray[0]=(this.responseText);


      }
    }



    //GET /posts
    xhttp.open('GET','http://localhost:3000/users?name=marc&password=password', true);


    xhttp.withCredentials = false;
    xhttp.send();

  }


  callback(){
    console.log('bacllback')
  }




}
