import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  URI:string = '';
  
  constructor(private http: HttpClient) { 
    this.URI = 'http://localhost:3000/configuration';
  }

  getTask():Observable<any> {
  return this.http.get(this.URI,this.httpOptions);
  
   
  }

 

 
}
