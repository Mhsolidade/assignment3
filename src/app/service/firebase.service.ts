import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

interface Questionario {
 titulo: string;
}

@Injectable()
export class FirebaseService {

  private user: Observable<User>;
  private userDetails: User = null;

  postsCol: AngularFirestoreCollection<Questionario>;
  posts: Observable<Questionario[]>;


  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
              private router: Router) {

      this.user = afAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
        });
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signInWithFacebook() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
    .then((credential) => {
      this.updateUserData(credential.user);
    });
  }

  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    .then((credential) => {
      this.updateUserData(credential.user);
    });
    }

   updateUserData(user) {
      // Sets user data to firestore on login

      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

      const data: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      };

      return userRef.set(data, { merge: true });

    }
    logout() {
    this.afAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }

  questionario() {
   return this.postsCol = this.afs.collection('quesionario');
  }
  questinarioChange () {

    return this.posts = this.postsCol.valueChanges();

  }


}
