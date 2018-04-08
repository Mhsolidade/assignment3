import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { FirebaseService } from './service/firebase.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyDKbpyqpSkFgqgHfJF5J7vVuI8kWhYvevY',
  authDomain: 'gama-assignment-3.firebaseapp.com',
  databaseURL: 'https://gama-assignment-3.firebaseio.com',
  projectId: 'gama-assignment-3',
  storageBucket: 'gama-assignment-3.appspot.com',
  messagingSenderId: '924689668249'
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
