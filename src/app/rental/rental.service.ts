import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rental } from './rental.modal';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private httpClient: HttpClient) { }

  public getRentals(): Observable<Rental[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.get<Rental[]>('http://localhost:8282/rental', { headers: headers });
  }
}
