import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urls = {
    v1: `${environment.urls.api.v1}/users`
  }
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.urls.v1}`).pipe(map(resp => resp));
  }

  get(id: string): Observable<any> {
    return this.http.get<any>(`${this.urls.v1}/${id}`).pipe(map(resp => resp));
  }

  getByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.urls.v1}/get-by-email/${email}`).pipe(map(resp => resp));
  }

  post(data: any): Observable<any> {
    return this.http.post<any>(`${this.urls.v1}`, data).pipe(map(resp => resp));
  }

  put(data: any): Observable<any> {
    return this.http.put<any>(`${this.urls.v1}`, data).pipe(map(resp => resp));
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.urls.v1}/${id}`).pipe(map(resp => resp));
  }
}
