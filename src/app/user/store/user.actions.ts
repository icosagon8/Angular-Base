import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/shared/models/shared.models';

export const requestCurrentUser = createAction('[App] REQUEST_CURRENT_USER');

export const requestCurrentUserSuccess = createAction(
    '[App] REQUEST_CURRENT_USER_SUCCESS',
    props<User>(),
);

export const requestCurrentUserFail = createAction('[App] REQUEST_CURRENT_USER_FAIL');
