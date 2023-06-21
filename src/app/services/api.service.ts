import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(`${this.apiUrl}/people/`);
  }

}
