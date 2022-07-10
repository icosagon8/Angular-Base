import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';
import { Response, User } from 'src/app/shared/models/shared.models';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    public getUser(): Observable<User> {
        return this.http
            .get<Response<User>>(`${environment.apiUrl}/users/me`)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error.message);

        return throwError('A data error occured, please try again.');
    }
}
