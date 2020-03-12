import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer } from './customer.modal';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  public getCustomer(): Observable<Customer[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.get<Customer[]>(`http://localhost:8282/customer`, { headers: headers });
  }
}
