import { GabaritoService } from './../service/gabarito.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  questoesRef: AngularFireList<any>;
  questoes: Observable<any[]>;

  gabaritoRef: AngularFireList<any>;
  gabarito: Observable<any>;

  constructor(public db: AngularFireDatabase, private gabaritoService: GabaritoService) {
    this.questoesRef = db.list('questionario');
    // Use snapshotChanges().map() to store the key
    this.questoes = this.questoesRef.snapshotChanges().map(changes => {
      return changes.map(c => ( { key: c.payload.key, ...c.payload.val() }));
    });
  }
  ngOnInit() {
    this.gabaritoRef = this.db.list('questionario');
    // Use snapshotChanges().map() to store the key
    this.gabarito = this.questoesRef.snapshotChanges().map(changes => {
      return changes.map(c => ( { key: c.payload.key, ...c.payload.val() }));
    });
  }


  onSubmit(form) {
  // alert('form');
    console.log(form.value);
    const resposta = this.gabaritoService.verificaGabarito(form.value);
    this.gabaritoService.addItem(resposta);
    }



  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

}
