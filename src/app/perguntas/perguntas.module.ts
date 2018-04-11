import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PerguntasRoutingModule } from './perguntas-routing.module';
import { PerguntasComponent } from './perguntas.component';

@NgModule({
  imports: [
    CommonModule,
    PerguntasRoutingModule,
    FormsModule,
  ],
  declarations: [PerguntasComponent]
})
export class PerguntasModule { }
