import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';
import { Course, Response } from 'src/app/shared/models/shared.models';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CoursesService {
    constructor(private http: HttpClient) {}

    public getAll(): Observable<Course[]> {
        return this.http
            .get<Response<Course[]>>(`${environment.apiUrl}/courses/all`)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    public createCourse(course: Course): Observable<Course> {
        return this.http
            .post<Response<Course>>(`${environment.apiUrl}/courses/add`, course)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    public editCourse(course: Course): Observable<string> {
        return this.http
            .put<Response<string>>(`${environment.apiUrl}/courses/${course.id}`, course)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    public getCourse(courseId: Course['id']): Observable<Course> {
        return this.http
            .get<Response<Course>>(`${environment.apiUrl}/courses/${courseId}`)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    public deleteCourse(courseId: Course['id']): Observable<string> {
        return this.http
            .delete<Response<string>>(`${environment.apiUrl}/courses/${courseId}`)
            .pipe(pluck('result'), catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error.message);

        return throwError('A data error occured, please try again.');
    }
}
