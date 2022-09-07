import { Action, createReducer, on } from '@ngrx/store';

import { Course } from 'src/app/shared/models/shared.models';

import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    allCourses: Course[];
    courses: Course[];
    course: Course | null;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

const initialState: CoursesState = {
    allCourses: [],
    courses: [],
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: '',
};

function updateCourseInState(courses: Course[], courseToUpdate: Course): Course[] {
    return courses.map((course) =>
        course.id === courseToUpdate.id ? courseToUpdate : course,
    );
}

export const reducer = createReducer(
    initialState,
    on(CoursesActions.requestAllCourses, (state) => ({
        ...state,
        isAllCoursesLoading: true,
    })),
    on(CoursesActions.requestAllCoursesSuccess, (state, { courses }) => ({
        ...state,
        allCourses: courses,
        courses,
        isAllCoursesLoading: false,
    })),
    on(CoursesActions.requestAllCoursesFail, (state, { errorMessage }) => ({
        ...state,
        isAllCoursesLoading: false,
        errorMessage,
    })),
    on(CoursesActions.requestSingleCourse, (state) => ({
        ...state,
        isSingleCourseLoading: true,
    })),
    on(CoursesActions.requestSingleCourseSuccess, (state, course) => ({
        ...state,
        course,
        isSingleCourseLoading: false,
    })),
    on(CoursesActions.requestSingleCourseFail, (state, { errorMessage }) => ({
        ...state,
        isSingleCourseLoading: false,
        errorMessage,
    })),
    on(CoursesActions.requestFilteredCourses, (state) => ({
        ...state,
        isSearchState: true,
    })),
    on(CoursesActions.requestFilteredCoursesSuccess, (state, { courses }) => ({
        ...state,
        courses,
        isSearchState: false,
    })),
    on(CoursesActions.requestDeleteCourse, (state) => ({
        ...state,
    })),
    on(CoursesActions.requestDeleteCourseFail, (state, { errorMessage }) => ({
        ...state,
        errorMessage,
    })),
    on(CoursesActions.requestEditCourse, (state) => ({
        ...state,
        isSingleCourseLoading: true,
    })),
    on(CoursesActions.requestEditCourseSuccess, (state, course) => {
        const allCourses = updateCourseInState(state.allCourses, course);
        const courses = updateCourseInState(state.courses, course);

        return { ...state, isSingleCourseLoading: false, allCourses, courses };
    }),
    on(CoursesActions.requestEditCourseFail, (state, { errorMessage }) => ({
        ...state,
        errorMessage,
    })),
    on(CoursesActions.requestCreateCourse, (state) => ({
        ...state,
    })),
    on(CoursesActions.requestCreateCourseSuccess, (state, course) => {
        const allCourses = [...state.allCourses, course];
        const courses = [...state.courses, course];

        return { ...state, allCourses, courses };
    }),
    on(CoursesActions.requestCreateCourseFail, (state, { errorMessage }) => ({
        ...state,
        errorMessage,
    })),
);

export const coursesReducer = (state: CoursesState, action: Action): CoursesState =>
    reducer(state, action);
