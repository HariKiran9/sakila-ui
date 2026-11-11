import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Payment } from './payment.modal';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:8282/payment';

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

  public getPayments(): Observable<Payment[]> {
    const headers = this.getCommonHeaders();
    return this.httpClient.get<Payment[]>(this.baseUrl, { headers })
      .pipe(catchError(this.handleError));
  }
  
}
