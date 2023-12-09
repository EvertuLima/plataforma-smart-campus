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
  private apiUrl3 = "http://localhost:3000/materials"

  constructor(private http: HttpClient) { }

  getAllServidores(): Observable<Servidor[]>{
    return this.http.get<Servidor[]>(this.apiUrl)
  }

  getAllEspacos(): Observable<Espaco[]>{
    return this.http.get<Espaco[]>(this.apiUrl2)
  }

  getAllMaterials(): Observable<Material[]>{
    return this.http.get<Material[]>(this.apiUrl3)
  }

  getEspaceById(id: number): Observable<Espaco>{
    return this.http.get<Espaco>(`${this.apiUrl}/${id}`)
  }
}
