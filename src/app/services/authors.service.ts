import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';
import { Author, Response } from 'src/app/shared/models/shared.models';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthorsService {
    constructor(private http: HttpClient) {}

    public getAll(): Observable<Author[]> {
        return this.http
            .get<Response<Author[]>>(`${environment.apiUrl}/authors/all`)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    public addAuthor(author: Author): Observable<Author> {
        return this.http
            .post<Response<Author>>(`${environment.apiUrl}/authors/add`, author)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error.message);

        return throwError('A data error occured, please try again.');
    }
}
