import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Film } from './film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  getStaff() {
    throw new Error('Method not implemented.');
  }

  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:8282/film';


  public getFilms(): Observable<Film[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.get<Film[]>(this.apiUrl, { headers: headers });
  }
}
