import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';



@Injectable()
export class GabaritoService {
  itemsRef: AngularFireList<any>;
  userId: string;

  // constructor(db: AngularFireDatabase) {
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.userId = user.uid;
          this.itemsRef = db.list(`pontuacao/${this.userId}`);
        }
    });
  }



  verificaGabarito(values) {
  let respostas = 0;
   if (values['q1'] == 'd') {

     respostas = respostas + 2;
   }
   if (values['q2'] == 'b') {
     respostas = respostas + 1;
   }
   if (values['q3'] == 'd') {
     respostas = respostas + 1;
   }
   if (values['q4'] == 'b') {
     respostas = respostas + 1;
   }
   if (values['q5'] == 'd') {
     respostas = respostas + 3;
   }
   if (values['q6'] == 'd') {
     respostas = respostas + 2;
   }
   if (values['q7'] == 'a') {
     respostas = respostas + 2;
   }
   if (values['q8'] == 'c') {
     respostas = respostas + 1;
   }
   if (values['q9'] == 'c') {
     respostas = respostas + 3;
   }
   if (values['q10'] == 'b') {
     respostas = respostas + 3;
   }
   return this.proficiencia(respostas);
  }

  proficiencia(pontuacao) {
    if (pontuacao <= 0) {
      return 'Melhor mudar de área';
    }
    if (pontuacao >= 1 && pontuacao <= 7) {
      return 'junior';
    }
    if (pontuacao >= 8 && pontuacao <= 15) {
      return 'Pleno';
    }
    if (pontuacao >= 16 && pontuacao <= 19) {
      return 'Sênior';
    }
  }
  addItem(newName: string) {
    this.itemsRef.push({ pontuacao: newName });
  }

}
