import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpentInMonthService {

  private urls = {
    v1: `${environment.urls.api.v1}/spents-in-month`
  }
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.urls.v1}`).pipe(map(resp => resp));
  }

  get(id: string): Observable<any> {
    return this.http.get<any>(`${this.urls.v1}/${id}`).pipe(map(resp => resp));
  }

  
}
