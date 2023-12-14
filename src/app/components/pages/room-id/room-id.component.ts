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

  showCreateMaterialForm: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiicampus: ApiicampusService
  ){
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    //this.getEspaco();
    // this.getMateriais();
    this.getMateriaisById();
  }

  toggleCreateMaterialForm(): void {
    this.showCreateMaterialForm = !this.showCreateMaterialForm;
  }

  getMateriaisById() { 
    this.apiicampus.getMateriaisById(this.id).subscribe((materiais) => {
      this.materiais = materiais;
    });
  }

  deleteMaterial(material: Material): void {
    console.log(material)
    const confirmation = confirm(`Deseja excluir o material ${material.descricao}?`);
  
    if (confirmation) {
      this.apiicampus.deleteMaterial(material.id).subscribe(() => {
        this.getMateriaisById();
      });
    }
  }

  updateMaterial(material: Material): void {
    this.apiicampus.updateMaterial(material).subscribe(() => {
      this.getMateriaisById();
    });
  }
  
 
}
