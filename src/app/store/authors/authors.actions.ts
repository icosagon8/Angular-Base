import { createAction, props } from '@ngrx/store';

import { Author } from 'src/app/shared/models/shared.models';

export const requestAuthors = createAction('[Courses Page] REQUEST_AUTHORS');
export const requestAuthorsSuccess = createAction(
    '[Courses Page] REQUEST_AUTHORS_SUCCESS',
    props<{ authors: Author[] }>(),
);
export const requestAuthorsFail = createAction('[Courses Page] REQUEST_AUTHORS_FAIL');
export const requestAddAuthor = createAction(
    '[Course Form] REQUEST_ADD_AUTHOR',
    props<{ author: Author }>(),
);
export const requestAddAuthorSuccess = createAction(
    '[Course Form] REQUEST_ADD_AUTHOR_SUCCESS',
    props<{ author: Author }>(),
);
export const requestAddAuthorFail = createAction('[Course Form] REQUEST_ADD_AUTHOR_FAIL');
export const resetAddedAuthor = createAction('[Course Form] RESET_ADDED_AUTHOR');
