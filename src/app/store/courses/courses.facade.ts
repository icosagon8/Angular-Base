import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Course } from 'src/app/shared/models/shared.models';

import * as CoursesActions from './courses.actions';
import { CoursesState } from './courses.reducer';
import {
    getAllCourses, getCourse, getCourses, getErrorMessage, isAllCoursesLoadingSelector,
    isSearchingStateSelector, isSingleCourseLoadingSelector
} from './courses.selectors';

@Injectable()
export class CoursesStateFacade {
    isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
    isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
    courses$ = this.store.pipe(select(getCourses));
    allCourses$ = this.store.pipe(select(getAllCourses));
    course$ = this.store.pipe(select(getCourse));
    errorMessage$ = this.store.pipe(select(getErrorMessage));

    constructor(private store: Store<CoursesState>) {}

    getAllCourses(): void {
        this.store.dispatch(CoursesActions.requestAllCourses());
    }

    getSingleCourse(course: Course): void {
        this.store.dispatch(CoursesActions.requestSingleCourse(course));
    }

    getFilteredCourses(searchValue: string): void {
        this.store.dispatch(
            CoursesActions.requestFilteredCourses({
                searchValue,
            }),
        );
    }

    editCourse(course: Course): void {
        this.store.dispatch(CoursesActions.requestEditCourse(course));
    }

    createCourse(course: Course): void {
        this.store.dispatch(CoursesActions.requestCreateCourse(course));
    }

    deleteCourse(course: Course): void {
        this.store.dispatch(CoursesActions.requestDeleteCourse(course));
    }
}
