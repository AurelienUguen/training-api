import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';

/* const CHARACTER_HTTP_URL_LENGTH = `https://swapi.dev/api/people/`.length; */

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }
}
