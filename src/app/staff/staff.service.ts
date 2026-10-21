import { inject, Injectable } from '@angular/core';
import { Staff } from './staff.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Address } from '../address/address.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:8282/staff';

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

  public getStaff(): Observable<Staff[]> {
    const headers = this.getCommonHeaders();
    return this.httpClient.get<Staff[]>(this.apiUrl, { headers }).pipe(catchError(this.handleError))
  }
}
