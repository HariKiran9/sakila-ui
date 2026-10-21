import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private httpClient = inject(HttpClient);
  private baseUrl = 'http://localhost:8282/category';

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

  public getCategory(): Observable<Category[]> {
    const headers = this.getCommonHeaders();
    return this.httpClient.get<Category[]>(this.baseUrl, { headers })
      .pipe(catchError(this.handleError));
  }

  public getCategoryDetailsById(categoryId: number): Observable<Category> {
    const headers = this.getCommonHeaders();
    return this.httpClient.get<Category>(`${this.baseUrl}/${categoryId}`, { headers })
      .pipe(catchError(this.handleError));
  }

  public updateCategory(category: Category): Observable<Category> {
    const headers = this.getCommonHeaders();
    return this.httpClient.put<Category>(`${this.baseUrl}/${category.categoryId}`, category, { headers })
      .pipe(catchError(this.handleError));
  }
}