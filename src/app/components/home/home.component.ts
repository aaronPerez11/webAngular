import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  email:string;
  password:string;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  login(email:HTMLInputElement, password:HTMLInputElement){
    if(email.value == "aa@gmail.com" && password.value == "qwerty"){
      this.router.navigate(["list"])
    }else{
      console.log(":(")
    }
  }
}
