import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private http: HttpClient) { }

  getNoticias(parametros:any): Observable<any>{

    const URL = 'https://newsapi.org/v2/top-headlines?country='+ parametros.pais +'&category='+ parametros.categoria +'&apiKey=43de2814934d430c9e5af9fc0357c4ef';
    
    return this.http.get(URL);
  }
}
