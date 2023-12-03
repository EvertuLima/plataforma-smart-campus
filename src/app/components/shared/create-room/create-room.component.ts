import { Component } from '@angular/core';
import { Espaco } from '../../interfaces/Espaco';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {

  local: Espaco = { 
    id_espaco: undefined,
    nome: '',
    descricao: '' 
  };
  nome: string;
  descricao: string;

  constructor() {
    this.nome = "";
    this.descricao = "";
  }

  criarLocal(): void {
    this.local.nome = this.nome;
    this.local.descricao = this.descricao;

    console.log(`Nome do Local: ${this.local.nome}`);
    console.log(`Descrição do Local: ${this.local.descricao}`);

  }
}
