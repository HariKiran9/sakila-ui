import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Actor } from './actor.model';
import { catchError } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class ActorService {

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


    public getActors(): Observable<Actor[]> {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        const options = { headers: headers, observe: 'body', responseType: "json", withCredentials: true };
        return this.httpClient.get<Actor[]>('http://localhost:8282/actor', { responseType: "json", headers }).pipe(catchError(this.handleError));
    }
}