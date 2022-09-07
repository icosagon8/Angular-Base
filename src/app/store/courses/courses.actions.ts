import { createAction, props } from '@ngrx/store';

import { Course } from 'src/app/shared/models/shared.models';

export const requestAllCourses = createAction('[Courses Page] REQUEST_ALL_COURSES');
export const requestAllCoursesSuccess = createAction(
    '[Courses Page] REQUEST_ALL_COURSES_SUCCESS',
    props<{ courses: Course[] }>(),
);
export const requestAllCoursesFail = createAction(
    '[Courses Page] REQUEST_ALL_COURSES_FAIL',
    props<{ errorMessage: string }>(),
);
export const requestSingleCourse = createAction(
    '[Courses Page] REQUEST_SINGLE_COURSE',
    props<Course>(),
);
export const requestSingleCourseSuccess = createAction(
    '[Courses Page] REQUEST_SINGLE_COURSE_SUCCESS',
    props<Course>(),
);
export const requestSingleCourseFail = createAction(
    '[Courses Page] REQUEST_SINGLE_COURSE_FAIL',
    props<{ errorMessage: string }>(),
);
export const requestFilteredCourses = createAction(
    '[Courses Page] REQUEST_FILTERED_COURSES',
    props<{ searchValue: string }>(),
);
export const requestFilteredCoursesSuccess = createAction(
    '[Courses Page] REQUEST_FILTERED_COURSES_SUCCESS',
    props<{ courses: Course[] }>(),
);
export const requestDeleteCourse = createAction(
    '[Courses Page] REQUEST_DELETE_COURSE',
    props<Course>(),
);
export const requestDeleteCourseFail = createAction(
    '[Courses Page] REQUEST_DELETE_COURSE_FAIL',
    props<{ errorMessage: string }>(),
);
export const requestEditCourse = createAction(
    '[Courses Page] REQUEST_EDIT_COURSE',
    props<Course>(),
);
export const requestEditCourseSuccess = createAction(
    '[Courses Page] REQUEST_EDIT_COURSE_SUCCESS',
    props<Course>(),
);
export const requestEditCourseFail = createAction(
    '[Courses Page] REQUEST_EDIT_COURSE_FAIL',
    props<{ errorMessage: string }>(),
);
export const requestCreateCourse = createAction(
    '[Courses Page] REQUEST_CREATE_COURSE',
    props<Course>(),
);
export const requestCreateCourseSuccess = createAction(
    '[Courses Page] REQUEST_CREATE_COURSE_SUCCESS',
    props<Course>(),
);
export const requestCreateCourseFail = createAction(
    '[Courses Page] REQUEST_CREATE_COURSE_FAIL',
    props<{ errorMessage: string }>(),
);
