import { Component } from '@angular/core';
import { Espaco } from '../../interfaces/Espaco';
import { ApiicampusService } from 'src/app/services/apiicampus.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  
  locais: Espaco[] = [];

  constructor(private apiicampus: ApiicampusService){
    this.getLocais();
  }

  getLocais(): void{
    this.apiicampus.getAllEspacos().subscribe((locais) => (this.locais = locais))
  }

}
