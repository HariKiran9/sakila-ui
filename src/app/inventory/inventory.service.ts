import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from './inventory.modal';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private httpClient = inject(HttpClient);
  private apiUrl = 'http://localhost:8282/inventory';
 
  public getInventory(): Observable<Inventory[]> {
     const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'No-Auth': 'true'
    });

    return this.httpClient.get<Inventory[]>(this.apiUrl, { headers });
  }
}
