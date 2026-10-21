import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Actor } from './actor.model';
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class ActorService {

    private httpClient = inject(HttpClient);
    private baseUrl = 'http://localhost:8282/actor';

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

    public getActors(): Observable<Actor[]> {
        const headers = this.getCommonHeaders();
        return this.httpClient.get<Actor[]>(this.baseUrl, { headers }).pipe(catchError(this.handleError));
    }
}