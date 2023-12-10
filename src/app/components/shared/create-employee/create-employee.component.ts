import { Component } from '@angular/core';
import { Servidor } from '../../interfaces/Servidor';

import { ApiicampusService } from 'src/app/services/apiicampus.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  servidores: Servidor[] = [];

  nome: string;
  email: string;
  num_telefone: string;
  siape: string;

  constructor(private apiicampus: ApiicampusService) {
    this.getServidores()
    this.nome = '';
    this.email = '';
    this.num_telefone = '';
    this.siape = '';
  }

  getServidores(): void{
    this.apiicampus.getAllServidores().subscribe((servidores) => (this.servidores = servidores));
  }

  cadastrarServidor(): void {
    const novoServidor: Servidor = {
      id: 0,
      nome: this.nome,
      email: this.email,
      num_telefone: this.num_telefone,
      siape: this.siape
    };

    this.apiicampus.postServidor(novoServidor).subscribe();
  }
}
