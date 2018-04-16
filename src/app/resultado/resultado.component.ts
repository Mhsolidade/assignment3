import { Component, OnInit } from '@angular/core';
import { GabaritoService } from './../service/gabarito.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  pontuacao: string;
  nivel: string;


  constructor(
    private gabaritoService: GabaritoService,
  ) { }

  ngOnInit() {
  this.nivel = this.gabaritoService.getResultado();
  console.log(this.nivel);
 
  if(this.nivel == 'Junior'){
    this.pontuacao = '3 a 5';
  }
  if(this.nivel == 'Pleno'){
    this.pontuacao = '6 a 8';
  }
  if(this.nivel == 'Senior'){
    this.pontuacao = '9 a 10';
  }

  }




}
