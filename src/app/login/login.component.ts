import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) {}
  email: string;
  password: string;

  ngOnInit() {
  }



  signup() {
    this.firebaseService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.firebaseService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.firebaseService.logout();
  }

}
