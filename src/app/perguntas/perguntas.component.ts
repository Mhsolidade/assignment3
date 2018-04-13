// import { GabaritoService } from './../service/gabarito.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { PerguntasService } from '.././service/perguntas.service';
import * as _ from 'lodash';



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

  constructor(private perguntasSvc: PerguntasService) { }


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
                          this.nextKey = _.get(perguntas[this.offset],'key');
                          console.log(perguntas[this.offset].key);
    });
  }


  onSubmit(form) {
  // alert('form');
    console.log(form.value);
    // const resposta = this.gabaritoService.verificaGabarito(form.value);
    // this.gabaritoService.addItem(resposta);

    // alert(`Parabens seu nivel é ${resposta}`);
    }

}
