// empresa.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }


  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/Empresa`);
  }

  getEmpresaById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/Empresa/${id}`);
  }


  addEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(`${this.apiUrl}/Empresa`, empresa);
  }


  updateEmpresa(empresa: Empresa): Observable<Empresa> {
    return this.http.put<Empresa>(`${this.apiUrl}/Empresa/${empresa.id}`, empresa);
  }


  deleteEmpresa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Empresa/${id}`);
  }
}
