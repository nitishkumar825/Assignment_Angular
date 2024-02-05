import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorldCitiesService {
  apiURL="https://datahub.io/core/world-cities/r/world-cities.json";

  httpOptions={
    headers: new HttpHeaders({
      'content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  // get():Observable<any>{
  //   return this.http.get(this.apiURL).pipe(catchError((error:HttpErrorResponse)=>{
  //     return throwError(error);
  //   }))
  // }
  get(){
    return this.http.get(this.apiURL);
  }
}
