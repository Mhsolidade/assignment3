import { Component, OnInit } from '@angular/core';


import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { PerguntasService } from '.././service/perguntas.service';
import { GabaritoService } from './../service/gabarito.service';

export class Respostas {
  key: string;
  resposta: string;
}

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent implements OnInit {
  perguntas: any;
  offset = 1;
  nextKey: any; // for next button
  prevKeys: any[] = []; // for prev button
  subscription: any;


  respostas: any = [];
  resp;
  constructor(private perguntasSvc: PerguntasService, private gabaritoService: GabaritoService ) {   }


  ngOnInit() {
    this.getPerguntas();
  }

  nextPage() {
    this.prevKeys.push(_.first(this.perguntas)['$key']); // set current key as pointer for previous page
    this.getPerguntas(this.nextKey);

  }

  prevPage() {
    const prevKey = _.last(this.prevKeys); // use last key in array
    this.prevKeys = _.dropRight(this.prevKeys); // then remove the last key in the array

    this.getPerguntas(prevKey);
  }

  private getPerguntas(key?) {

    this.subscription = this.perguntasSvc.getPerguntas(this.offset, key)
                       .subscribe(perguntas => {

                          this.perguntas = _.slice(perguntas, 0, this.offset);
                          this.nextKey = _.get(perguntas[this.offset], 'key');
                          // console.log(perguntas[this.offset].key);
    });
  }


  // onSubmit(form) {
  //   this.respostas.push(form.value);
  //   // console.log(this.respostas);
  //   // this.resp {} = this.respostas;
  //   this.gabaritoService.verificaGabarito()
  //   console.log(form.value);
  // }

  // enviaForm() {
  //   this.gabaritoService.verificaGabarito(this.respostas);
  // }


  onSubmit(form) {
    // this.respostas.push(form.value);
    let resp = form.value;
    // let questao = this.perguntas.questao;
    // console.log(resp['q1']);
    // console.log(questao);

    this.gabaritoService.verificaGabarito(resp, resp[0]);


  }


enviaForm() {
  const respo = this.gabaritoService.proficiencia();
  this.gabaritoService.addItem(respo);
  alert(`Parabens seu nivel é ${respo}`);
  // $('#myModal').modal('show');
  }
}
