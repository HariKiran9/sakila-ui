import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { User } from '../user/user.model';

import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  authenticate(user: FormData): Observable<User> {
    console.log('[login.service] [authenticate] : user : ', user);

    // if (username === "javainuse" && password === "password") {
    //   sessionStorage.setItem('username', username)
    //   return true;
    // } else {
    //   return false;
    // }

    const headers = new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    //headers.set('No-Auth', 'true');
    return this.httpClient.post<User>(`http://localhost:8282/login`, user, { headers: headers }).pipe(catchError(this.handleError));
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username')
    let isUserLogIn = !(user === null);
    return isUserLogIn;
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
