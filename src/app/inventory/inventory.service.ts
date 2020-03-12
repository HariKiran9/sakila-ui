import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory.modal';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private httpClient: HttpClient) { }

  public getCustomer(): Observable<Inventory[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.get<Inventory[]>(`http://localhost:8282/inventory`, { headers: headers });
  }
}
