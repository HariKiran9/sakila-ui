import { inject, Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { City } from './city.model';

@Injectable({ providedIn: 'root' })
export class CityService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:8282/city';

  private getCommonHeaders(): HttpHeaders {
    // HttpHeaders are immutable; assignment or chaining returns a new instance
    return new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'No-Auth': 'true'
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Client-side error:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public getCities(): Observable<City[]> {
    const headers = this.getCommonHeaders();
    console.log('Headers : ', headers);
    // const options = { headers: headers, observe: 'body', responseType: "json", withCredentials: true };
    return this.httpClient.get<City[]>(this.apiUrl, { headers }).pipe(catchError(this.handleError));
  }

  public getCities2(): Observable<City[]> {
    const headers = this.getCommonHeaders();
    return this.httpClient.get<City[]>(this.apiUrl, { headers }).pipe(catchError(this.handleError));
  }

}