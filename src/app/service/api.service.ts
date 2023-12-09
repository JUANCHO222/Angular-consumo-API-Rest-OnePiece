import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = 'http://localhost:8080/api-onepiece/mostrar-personajes';
  private url = 'http://localhost:8080/api-onepiece/guardar-personaje';
   
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public postData(data:any){
    return this.http.post(this.url,data);
  }
}
