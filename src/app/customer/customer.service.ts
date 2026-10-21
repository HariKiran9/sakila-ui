import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.modal';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:8282/customer';

  public getCustomer(): Observable<Customer[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'No-Auth': 'true'
    });

    return this.httpClient.get<Customer[]>(this.apiUrl, { headers });
  }
}