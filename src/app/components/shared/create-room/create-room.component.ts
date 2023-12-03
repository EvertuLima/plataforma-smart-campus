import { Component } from '@angular/core';
import { Espaco } from '../../interfaces/Espaco';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {

  local!: Espaco;
  

  nome: string;
  descricao: string;

  constructor(){
    this.nome ="";
    this.descricao="";
  }
  
  enviarFormulario():void{
    // this.descricao = algo;
    this.local.descricao = this.descricao;

    console.log(`OK ${this.local.nome}`)
    console.log(`OK ${this.descricao}`)
  }
}
