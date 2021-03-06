import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { PerguntasModule } from './perguntas/perguntas.module';
import { ResultadoModule } from './resultado/resultado.module';


import { AuthGuard } from './guards/auth.guard';
import { FirebaseService } from './service/firebase.service';
import { GabaritoService } from './service/gabarito.service';
import { PerguntasService } from './service/perguntas.service';


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
    PerguntasModule,
    ResultadoModule,
    // NgbModule.forRoot(),
    LoginModule,
    HomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,

    AppRoutingModule,
  ],
  providers: [
    FirebaseService,
    AngularFirestore,
    AngularFireDatabase,
    AuthGuard,
    GabaritoService,
    PerguntasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
