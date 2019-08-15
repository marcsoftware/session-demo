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
username = 'username'; //test values for login so i dont have to retype
password = 'password';
response='-';

 global_array=new Array();

  constructor(public sessionService: SessionService) {
     this.buttonMessage = sessionService.getToken();

  }

  onClickMe() {

   // this.clickMessage = sessionService.getToken();


  }

  setCookie(){
      //  this.buttonMessage='logged in';
     this.sessionService.setToken(this.username);
     this.buttonMessage = this.sessionService.getToken();
  }

  ngOnInit() {
  }

  display(x){
    this.response=x;
  }
  login() {

    var xhttp = new XMLHttpRequest();
    var text ='testing';
    var yourArray=this.global_array;

    console.log(yourArray);
    this.response=yourArray[0];
    yourArray[1]=this.sessionService;

    xhttp.onreadystatechange =function(this) {
      if (this.readyState === 4 && this.status === 200) {

        console.log('-------' + this.responseText);


        yourArray[0]=(this.responseText);
        console.log(yourArray[0]);


        yourArray[1].setToken(this.responseText);



      }
    }
    //GET /posts
    xhttp.open('GET','http://18.191.142.3:8181/login?username='+this.username+'&password='+this.password, true);

    xhttp.withCredentials = false;
    xhttp.send();

  }


  localLogin() {

    var xhttp = new XMLHttpRequest();
    var text ='testing';
    var yourArray=this.global_array;

    console.log(yourArray);
    this.response=yourArray[0];
    yourArray[1]=this.sessionService;

    xhttp.onreadystatechange =function(this) {
      if (this.readyState === 4 && this.status === 200) {
        console.log('testing');
        console.log('-------' + this.responseText);

        var obj = JSON.parse(this.responseText);
        yourArray[0]=(this.responseText);
        console.log(yourArray[0]);



        yourArray[1].setName(obj[0]['username']);
        yourArray[1].setToken(obj[0]['password']); //makes a randomly generated token



      }
    }





    //GET /posts
    xhttp.open('POST','http://localhost:3000/login?username='+this.username+'&password='+this.password, true);


    xhttp.withCredentials = false;
    xhttp.send();

  }




}
