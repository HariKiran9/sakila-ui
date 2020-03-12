import { Injectable } from '@angular/core';
import { Staff } from './staff.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Address } from '../address/address.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private httpClient: HttpClient) { }

  public getStaff(): Observable<Staff[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.httpClient.get<Staff[]>(`http://localhost:8282/staff`, { headers: headers }).pipe(
      map(data => data.map(data => new Staff().deserialize(data)))
    );
  }
}
