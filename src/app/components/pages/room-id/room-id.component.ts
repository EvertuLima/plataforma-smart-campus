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

  displayedColumns: string[] = ['tombo', 'descricao', 'marca', 'modelo', 'estado', 'actions'];

  materiais: Material[] = [];
  materiaisId?: Material;
  espaco?: Espaco;
  id:number;
  mostrarForms: boolean = false;
  qtd = 1;

  constructor(
    private route: ActivatedRoute,
    private apiicampus: ApiicampusService
  ){
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    //this.getEspaco();
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

  // getEspaco(){
  //   const id = Number(this.route.snapshot.paramMap.get("id"));
  //   this.apiicampus.getEspaceById(id).subscribe((espaco) => (this.espaco = espaco))
  // }

  deleteMaterial(material: Material): void {
    console.log(material)
    const confirmation = confirm(`Deseja excluir o material ${material.descricao}?`);
  
    if (confirmation) {
      this.apiicampus.deleteMaterial(material.id).subscribe(() => {
        // Atualize a lista de materiais após a exclusão
        this.getMateriaisById();
      });
    }
  }

  updateMaterial(material: Material): void {
    console.log(material)
    this.mostrarForms = true;
    this.apiicampus.updateMaterial(material).subscribe(() => {
      // Após a atualização, atualize a lista de materiais
      this.getMateriaisById();
    });
  }
  
 
}
