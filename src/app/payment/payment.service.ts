import { Injectable } from '@angular/core';
import { Payment } from './payment.modal';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  public getPayments(): Observable<Payment[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.get<Payment[]>(`http://localhost:8282/payment`, { headers: headers });
  }
  
}
