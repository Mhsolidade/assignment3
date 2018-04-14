import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction } from 'angularfire2/database';
import * as firebase from 'firebase/app';


@Injectable()
export class PerguntasService {
  groups: Observable<any>;
  constructor(private db: AngularFireDatabase) { }

  getPerguntas(offset, startKey: string): Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    let key = [startKey];

    if (typeof (startKey) == 'undefined') {
      key[0] = 'q1';

    }
    // console.log(startKey);
    this.groups = this.db.list(`questionario`, ref =>
          ref.orderByKey().startAt(key[0]).limitToFirst(offset + 1)).snapshotChanges().map(changes => {
            return  changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          });
    return this.groups ;
  }
}
