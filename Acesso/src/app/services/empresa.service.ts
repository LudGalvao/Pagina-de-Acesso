import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../model/ListaCompartilhadaArquivo';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }


  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(`${this.apiUrl}/Empresa`).pipe;
  }

  getEmpresaById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.apiUrl}/Empresa/${id}`);
  }
}
