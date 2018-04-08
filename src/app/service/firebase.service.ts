import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
    user: Observable<firebase.User>;
    // tslint:disable-next-line:no-inferrable-types
    private usuarioAutenticado: boolean = false;

    constructor(private firebaseAuth: AngularFireAuth) {
      this.user = firebaseAuth.authState;
    }

    signup(email: string, password: string) {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Success!', value);
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    login(email: string, password: string) {
      this.firebaseAuth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:', err.message);
        });
    }

    logout() {
      this.firebaseAuth
        .auth
        .signOut();
    }

    isLogggedIn() {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return this.usuarioAutenticado = true;

        } else {
          // No user is signed in.
          return this.usuarioAutenticado = false;
        }
      });
    }

}
