import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './../service/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}
    user = {
      email: '',
      password: ''
    };

  ngOnInit() {
  }


   signInWithGoogle() {
    this.firebaseService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['/home']);
      })
    .catch((err) => console.log(err));
  }
  signInWithFacebook() {
    this.firebaseService.signInWithFacebook()
    .then((res) => {
        this.router.navigate(['/home']);
      })
    .catch((err) => console.log(err));
  }

  signInWithEmail() {

    this.firebaseService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['/home']);
      })
      .catch((err) => console.log('error: ' + err));
  }

  logout() {
    this.firebaseService.logout();
  }


}
