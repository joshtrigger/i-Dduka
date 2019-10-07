import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post = (url, body): Observable<any> => {
    return this.http.post<any>(url, body);
  };

  get = (url): Observable<any> => {
    return this.http.get<any>(url);
  };

  update = (url, body): Observable<any> => {
    return this.http.put<any>(url, body);
  };

  delete = (url): Observable<any> => {
    return this.http.delete<any>(url);
  };
}
