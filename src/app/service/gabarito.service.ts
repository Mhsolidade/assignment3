import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';



@Injectable()
export class GabaritoService {
  itemsRef: AngularFireList<any>;
  userId: string;
  nameUser;

  // constructor(db: AngularFireDatabase) {
    respostas;
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.nameUser = user.displayName;
          this.itemsRef = db.list(`pontuacao/${this.userId}`);
        }
    });
    this.respostas = 0;
  }



  verificaGabarito(values, questao) {
  //  s
   if (values['q1'] == 'd') {

     this.respostas = this.respostas + 2;
   }
   if (values['q2'] == 'b') {
     this.respostas = this.respostas + 1;
   }
   if (values['q3'] == 'd') {
     this.respostas = this.respostas + 1;
   }
   if (values['q4'] == 'b') {
     this.respostas = this.respostas + 1;
   }
   if (values['q5'] == 'd') {
     this.respostas = this.respostas + 3;
   }
   if (values['q6'] == 'd') {
     this.respostas = this.respostas + 2;
   }
   if (values['q7'] == 'a') {
     this.respostas = this.respostas + 2;
   }
   if (values['q8'] == 'c') {
     this.respostas = this.respostas + 1;
   }
   if (values['q9'] == 'c') {
     this.respostas = this.respostas + 3;
   }
   if (values['q10'] == 'b') {
     this.respostas = this.respostas + 3;
   }
   console.log(this.respostas);
   return true;
  }

  proficiencia() {
    if ( this.respostas <= 0) {
      return 'Melhor mudar de área';
    }
    if ( this.respostas >= 1 &&  this.respostas <= 7) {
      return 'junior';
    }
    if ( this.respostas >= 8 &&  this.respostas <= 15) {
      return 'Pleno';
    }
    if ( this.respostas >= 16 &&  this.respostas <= 19) {
      return 'Sênior';
    }
  }
  addItem(newName: string) {
    this.itemsRef.push([{ pontuacao: newName },{ userId: this.userId}, { nomeUsuario: this.nameUser}]);
  }

}
