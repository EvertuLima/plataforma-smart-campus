import { Injectable } from '@angular/core';
import { Servidor } from '../components/interfaces/Servidor';
import { Espaco } from '../components/interfaces/Espaco';
import { Material } from '../components/interfaces/Material';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiicampusService {

  private apiUrl = "http://localhost:3000/servidores"
  private apiUrl2 = "http://localhost:3000/espacos"
  private apiUrl3 = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getAllServidores(): Observable<Servidor[]>{
    return this.http.get<Servidor[]>(`${this.apiUrl3}servidores`)
  }

  postServidor(servidor: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${this.apiUrl3}servidores`, servidor);
  }

  getAllEspacos(): Observable<Espaco[]>{
    return this.http.get<Espaco[]>(`${this.apiUrl3}espaces`)
  }
  
  getEspaceById(id: number): Observable<Espaco>{
    return this.http.get<Espaco>(`${`${this.apiUrl3}espaces`}/${id}`)
  }

  cadastrarEspaco(espaco: Espaco): Observable<Espaco> {
    return this.http.post<Espaco>(`${this.apiUrl3}espaces`, espaco);
  }

  getAllMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>(`${this.apiUrl3}materiais`)
  }

  // getMateriasById(id: number): Observable<Material>{
  //   return this.http.get<Material>(`${`${this.apiUrl3}materiais`}/${id}`)
  // }
  getMateriaisById(id: number): Observable<Material[]> {
    const url = `${this.apiUrl3}materiais?id_espaco=${id}`;
    return this.http.get<Material[]>(url);
  }


  cadastrarMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.apiUrl3}materiais`, material);
  }
}
