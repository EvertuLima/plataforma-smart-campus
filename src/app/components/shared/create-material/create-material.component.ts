import { Component, Input } from '@angular/core';
import { Material } from '../../interfaces/Material';
import { ApiicampusService } from 'src/app/services/apiicampus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-material',
  templateUrl: './create-material.component.html',
  styleUrls: ['./create-material.component.css']
})
export class CreateMaterialComponent {
  materiais: Material[] = [];

  @Input() id!: number;
  
  tombo: string;
  descricao: string;
  marca: string;
  modelo: string;
  estado: string;

  constructor (private apiicampus: ApiicampusService){
    this.tombo = '';
    this.descricao = '';
    this.marca =  '';
    this. modelo = '';
    this.estado = '';
  }

  cadastrarMaterial(){
    const novoMaterial: Material = {
      id: 0,  // ou o valor padrão que você usa para novos materiais
      id_espaco: this.id,    // ou o valor padrão que você usa para novos materiais
      tombo: this.tombo,
      descricao: this.descricao,
      marca: this.marca,
      modelo: this.modelo,
      estado: this.estado
    };

    this.apiicampus.cadastrarMaterial(novoMaterial).subscribe();
  }
}
