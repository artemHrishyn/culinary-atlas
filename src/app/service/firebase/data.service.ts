import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(
    private http: HttpClient,
    private api: ApiService
  ) {}

  public getData(value: string): Observable<any> {
    return this.http.get<any>(`${this.api.source[`${value}`]}.json`); // Додайте правильний шлях до вашої бази даних
  }
}
