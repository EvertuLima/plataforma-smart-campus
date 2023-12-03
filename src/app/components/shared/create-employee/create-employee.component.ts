import { Component } from '@angular/core';
import { Servidor } from '../../interfaces/Servidor';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  servidor: Servidor = {
    id_espaco: undefined,
    nome: '',
    email: '',
    num_telefone: '',
    siape: ''
  };

  nome: string;
  email: string;
  num_telefone: string;
  siape: string;

  constructor() {
    this.nome = '';
    this.email = '';
    this.num_telefone = '';
    this.siape = '';
  }

  cadastrarServidor(): void {
    const novoServidor: Servidor = {
      id_espaco: undefined,
      nome: this.nome,
      email: this.email,
      num_telefone: this.num_telefone,
      siape: this.siape
    };
    console.log(`Nome do Servidor: ${novoServidor.nome}`);
    console.log(`Email do Servidor: ${novoServidor.email}`);
    console.log(`Telefone do Servidor: ${novoServidor.num_telefone}`);
    console.log(`SIAPE do Servidor: ${novoServidor.siape}`);
  }
}
