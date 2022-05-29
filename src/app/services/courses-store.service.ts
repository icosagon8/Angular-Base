import { Injectable } from '@angular/core';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, finalize, map, tap } from 'rxjs/operators';
import { Course } from 'src/app/shared/models/shared.models';

import { CoursesService } from './courses.service';

@Injectable({
    providedIn: 'root',
})
export class CoursesStoreService {
    private readonly isLoading$$ = new BehaviorSubject<boolean>(false);
    public readonly isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

    private readonly courses$$ = new BehaviorSubject<Course[]>([]);
    public readonly courses$: Observable<Course[]> = this.getCourses();

    private readonly searchQuery$$ = new BehaviorSubject<string>('');
    private readonly searchQuery$: Observable<string> = this.searchQuery$$.pipe(
        distinctUntilChanged(),
    );

    constructor(private coursesService: CoursesService) {
        this.getAll();
    }

    public createCourse(course: Course): Observable<Course> {
        return this.coursesService
            .createCourse(course)
            .pipe(
                tap((courseFromApi) =>
                    this.setCoursesToState([...this.courses, courseFromApi]),
                ),
            );
    }

    public getCourse(courseId: Course['id']): Observable<Course> {
        this.setIsLoading(true);

        return this.coursesService.getCourse(courseId).pipe(
            finalize(() => {
                this.setIsLoading(false);
            }),
        );
    }

    public editCourse(course: Course): Observable<string> {
        return this.coursesService
            .editCourse(course)
            .pipe(tap(() => this.updateCourseInState(course)));
    }

    public deleteCourse(courseId: Course['id']): Observable<string> {
        return this.coursesService
            .deleteCourse(courseId)
            .pipe(tap(() => this.removeCourseFromState(courseId)));
    }

    public setSearchQuery(searchQuery: string): void {
        this.searchQuery$$.next(searchQuery);
    }

    private get courses(): Course[] {
        return this.courses$$.getValue();
    }

    private getAll(): void {
        this.setIsLoading(true);

        this.coursesService
            .getAll()
            .pipe(
                finalize(() => {
                    this.setIsLoading(false);
                }),
            )
            .subscribe((courses) => {
                this.setCoursesToState(courses);
            });
    }

    private getCourses(): Observable<Course[]> {
        return combineLatest([this.courses$$, this.searchQuery$]).pipe(
            distinctUntilChanged(),
            map(([courses, searchQuery]) => {
                const searchQueryLower = searchQuery.toLowerCase();

                return courses.filter((course) => {
                    const courseTitleLower = course.title.toLowerCase();
                    return courseTitleLower.includes(searchQueryLower);
                });
            }),
        );
    }

    private setIsLoading(isLoading: boolean): void {
        this.isLoading$$.next(isLoading);
    }

    private setCoursesToState(courses: Course[]): void {
        this.courses$$.next(courses);
    }

    private updateCourseInState(courseToUpdate: Course): void {
        const courses = this.courses.map((course) =>
            course.id === courseToUpdate.id ? courseToUpdate : course,
        );
        this.setCoursesToState(courses);
    }

    private removeCourseFromState(courseToRemoveId: Course['id']): void {
        const courses = this.courses.filter((course) => course.id !== courseToRemoveId);
        this.setCoursesToState(courses);
    }
}
