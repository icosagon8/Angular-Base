import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, pluck, tap } from 'rxjs/operators';
import { Response, User } from 'src/app/shared/models/shared.models';
import { environment } from 'src/environments/environment';

import { SessionStorageService } from './session-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly isAuthorized$$ = new BehaviorSubject<boolean>(false);
    public readonly isAuthorized$: Observable<boolean> =
        this.isAuthorized$$.asObservable();

    constructor(
        private http: HttpClient,
        private sessionStorageService: SessionStorageService,
        private router: Router,
    ) {
        this.isLoggedIn();
    }

    private isLoggedIn(): void {
        this.getToken() !== null && this.setIsAuthorized(true);
    }

    public login(user: Pick<User, 'email' | 'password'>): void {
        this.http
            .post<Response<string>>(`${environment.apiUrl}/login`, user)
            .pipe(
                pluck('result'),
                tap((token) => {
                    this.sessionStorageService.setToken('token', token);
                    this.router.navigate(['courses']);
                }),
                catchError(this.handleError),
            )
            .subscribe(() => this.setIsAuthorized(true));
    }

    public logout(): void {
        this.http
            .delete<Response<string>>(`${environment.apiUrl}/logout`)
            .pipe(
                tap(() => {
                    this.sessionStorageService.deleteToken('token');
                    this.router.navigate(['/login']);
                }),
                catchError(this.handleError),
            )
            .subscribe(() => this.setIsAuthorized(false));
    }

    public register(user: User): void {
        this.http
            .post<Response<string>>(`${environment.apiUrl}/register`, user)
            .pipe(catchError(this.handleError))
            .subscribe();
    }

    public getToken(): string | null {
        return this.sessionStorageService.getToken('token');
    }

    private setIsAuthorized(isAuthorized: boolean): void {
        this.isAuthorized$$.next(isAuthorized);
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error.message);

        return throwError('A data error occured, please try again.');
    }
}
