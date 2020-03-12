import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Category } from './category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  public getCategory(): Observable<Category[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    headers.set('No-Auth', 'true');
    // var options = new RequestOptions({ headers: headers });
    return this.httpClient.get<Category[]>('http://localhost:8282/category', { headers: headers }).pipe(catchError(this.handleError));
  }

  public getCategoryDetailsById(categoryId: number): Observable<Category> {
    console.log('[category.service] [getCategoryDetailsById] categoryId : ', categoryId);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    headers.set('No-Auth', 'true');
    return this.httpClient.get<Category>(`http://localhost:8282/category/${categoryId}`, { headers: headers }).pipe(catchError(this.handleError));
  }

  public updateCategory(category: Category) {
    console.log('[category.service] [updateCategory] categoryId : ', category.categoryId);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    headers.set('No-Auth', 'true');
    return this.httpClient.put<Category>(`http://localhost:8282/category/${category.categoryId}`, category, { headers: headers }).pipe(catchError(this.handleError));
  }
}
