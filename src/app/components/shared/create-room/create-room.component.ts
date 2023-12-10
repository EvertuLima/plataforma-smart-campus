import { Component } from '@angular/core';
import { Espaco } from '../../interfaces/Espaco';
import { ApiicampusService } from 'src/app/services/apiicampus.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent {

  local: Espaco[] = [];

  nome: string;
  descricao: string;

  constructor(private apiicampus: ApiicampusService) {
    this.nome = "";
    this.descricao = "";
  }

  criarLocal(): void {
    const novoLocal: Espaco = {
      id: 0,
      nome: this.nome,
      descricao: this.descricao
    };
    
    this.apiicampus.cadastrarEspaco(novoLocal).subscribe();
  }
}
