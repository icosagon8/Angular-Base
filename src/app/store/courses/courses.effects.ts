import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { combineLatest, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { CoursesService } from 'src/app/services/courses.service';
import { Author, Course } from 'src/app/shared/models/shared.models';

import { AuthorsStateFacade } from '../authors/authors.facade';
import * as CoursesActions from './courses.actions';
import { CoursesStateFacade } from './courses.facade';

@Injectable()
export class AuthorsEffects {
    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestAllCourses),
            switchMap(() =>
                combineLatest([
                    this.coursesService.getAll(),
                    this.authorsStateFacade.authors$,
                ]).pipe(
                    map(([courses, authors]) =>
                        this.getCoursesWithAuthorNames(courses, authors),
                    ),
                    map((courses) =>
                        CoursesActions.requestAllCoursesSuccess({ courses }),
                    ),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            CoursesActions.requestAllCoursesFail({
                                errorMessage: error.message,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    filteredCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestFilteredCourses),
            switchMap(({ searchValue }) =>
                this.coursesStateFacade.allCourses$.pipe(
                    map((courses) => this.getFilteredCourses(courses, searchValue)),
                    map((courses) =>
                        CoursesActions.requestFilteredCoursesSuccess({ courses }),
                    ),
                ),
            ),
        ),
    );

    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestSingleCourse),
            switchMap((course) =>
                combineLatest([
                    this.coursesService.getCourse(course.id),
                    this.authorsStateFacade.authors$,
                ]).pipe(
                    map(([course, authors]) =>
                        this.getCoursesWithAuthorNames([course], authors),
                    ),
                    map(([course]) => CoursesActions.requestSingleCourseSuccess(course)),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            CoursesActions.requestSingleCourseFail({
                                errorMessage: error.message,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestDeleteCourse),
            switchMap((course) =>
                this.coursesService.deleteCourse(course.id).pipe(
                    map(() => CoursesActions.requestAllCourses()),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            CoursesActions.requestDeleteCourseFail({
                                errorMessage: error.message,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestEditCourse),
            switchMap((course) =>
                this.coursesService.editCourse(course).pipe(
                    map(() => CoursesActions.requestEditCourseSuccess(course)),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            CoursesActions.requestEditCourseFail({
                                errorMessage: error.message,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestCreateCourse),
            switchMap((course) =>
                this.coursesService.createCourse(course).pipe(
                    map((course) => CoursesActions.requestCreateCourseSuccess(course)),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            CoursesActions.requestCreateCourseFail({
                                errorMessage: error.message,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    redirectToTheCoursesPage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    CoursesActions.requestCreateCourseSuccess,
                    CoursesActions.requestEditCourseSuccess,
                    CoursesActions.requestSingleCourseFail,
                ),
                tap(() => this.router.navigate(['courses'])),
            ),
        { dispatch: false },
    );

    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private authorsStateFacade: AuthorsStateFacade,
        private coursesStateFacade: CoursesStateFacade,
        private router: Router,
    ) {}

    getCoursesWithAuthorNames(courses: Course[], allAuthors: Author[]): Course[] {
        return courses.map((course) => {
            const authors1 = allAuthors
                .filter((author) => course.authors.includes(author.id))
                .map((author) => author.name);

            return { ...course, authors1 };
        });
    }

    getFilteredCourses(courses: Course[], searchValue: string): Course[] {
        const searchQueryLower = searchValue.toLowerCase();

        return courses.filter((course) => {
            const courseTitleLower = course.title.toLowerCase();
            return courseTitleLower.includes(searchQueryLower);
        });
    }
}
