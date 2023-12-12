import { Component } from '@angular/core';
import { Espaco } from '../../interfaces/Espaco';
import { ActivatedRoute } from '@angular/router';
import { ApiicampusService } from 'src/app/services/apiicampus.service';
import { Material } from '../../interfaces/Material';

@Component({
  selector: 'app-room-id',
  templateUrl: './room-id.component.html',
  styleUrls: ['./room-id.component.css'],
})
export class RoomIdComponent {

  displayedColumns: string[] = ['tombo', 'descricao', 'marca', 'modelo', 'estado'];

  materiais: Material[] = [];
  materiaisId?: Material;
  espaco?: Espaco;
  id:number;
  
  materias: Material[] = [];
  constructor(
    private route: ActivatedRoute,
    private apiicampus: ApiicampusService
  ){
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getEspaco();
    // this.getMateriais();
    this.getMateriaisById();
  }

  // getMateriais(){
  //   this.apiicampus.getAllMaterials().subscribe((materiais) => (this.materiais = materiais))
  // }

  getMateriaisById() { 
    this.apiicampus.getMateriaisById(this.id).subscribe((materiais) => {
      this.materiais = materiais;
    });
  }

  getEspaco(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.apiicampus.getEspaceById(id).subscribe((espaco) => (this.espaco = espaco))
  }
}
