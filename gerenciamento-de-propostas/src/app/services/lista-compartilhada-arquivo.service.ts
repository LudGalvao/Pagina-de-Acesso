import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ListaCompartilhadaArquivo } from '../model/ListaCompartilhadaArquivo';

@Injectable({
  providedIn: 'root'
})
export class ListaCompartilhadaArquivoService {

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // GET
  getListas(): Observable<ListaCompartilhadaArquivo[]>{
    return this.http.get<ListaCompartilhadaArquivo[]>(this.baseurl + '/listas_compartilhadas_arquivo').pipe(retry(1),catchError(this.errorHandl))

  }

  // GET BY LISTA_COMPARTILHADA_ID
  getListasByListaCompartilhadaID(id:string | number | null): Observable<ListaCompartilhadaArquivo[]>{
    const url = `${this.baseurl}/listas_compartilhadas_arquivo?lista_compartilhada.id=${id}`;
    return this.http.get<ListaCompartilhadaArquivo[]>(url).pipe(retry(1), catchError(this.errorHandl));

  }

  errorHandl(error:any){
    let errorMessage = ''
    // o erro está vindo do front
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      // erro que veio da API
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage
    })
  }
}
