import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {Inject} from '@angular/core';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  providers: [SessionService]
})


export class AnimeComponent implements OnInit {

  buttonMessage = '';
username = 'username'; //test values for login so i dont have to retype
password = 'password';
response='-';

 global_array=new Array();

  constructor(public sessionService: SessionService) {
     this.getAnime();

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

  rate(x,handle){

    console.log(handle.value);
  }


  getAnime() {

    var xhttp = new XMLHttpRequest();
    var text ='testing';
    var yourArray=this.global_array;

    console.log(yourArray);
    this.response=yourArray[0];
    yourArray[1]=this.sessionService;

    xhttp.onreadystatechange =function(this) {
      if (this.readyState === 4 && this.status === 200) {



        var obj = JSON.parse(this.responseText);
        yourArray[0]=JSON.parse(this.responseText);








      }
    }





    //GET /posts
    xhttp.open('GET','http://localhost:3000/anime', true);


    xhttp.withCredentials = false;
    xhttp.send();

  }




}
