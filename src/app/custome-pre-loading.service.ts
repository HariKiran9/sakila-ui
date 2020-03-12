import { Injectable } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route } from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomePreLoadingService implements PreloadingStrategy {

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log('[CustomePreLoadingService]');
    if (route.data && route.data['preload']) {
      return fn();
    } else {
      return of(null);
    }
  }

  constructor() { }
}
