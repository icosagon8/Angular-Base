import { createAction, props } from '@ngrx/store';

import { User } from 'src/app/shared/models/shared.models';

export const requestLogin = createAction(
    '[Login Page] REQUEST_LOGIN',
    props<Pick<User, 'email' | 'password'>>(),
);
export const requestLoginSuccess = createAction(
    '[Login Page] REQUEST_LOGIN_SUCCESS',
    props<{ token: string | null; isAuthorized: boolean }>(),
);
export const requestLoginFail = createAction(
    '[Login Page] REQUEST_LOGIN_FAIL',
    props<{ errorMessage: string }>(),
);
export const requestRegister = createAction(
    '[Registration Page] REQUEST_REGISTER',
    props<User>(),
);
export const requestRegisterSuccess = createAction(
    '[Registration Page] REQUEST_REGISTER_SUCCESS',
);
export const requestRegisterFail = createAction(
    '[Registration Page] REQUEST_REGISTER_FAIL',
    props<{ errorMessage: string }>(),
);
export const requestLogout = createAction('[Courses Page] REQUEST_LOGOUT');
export const requestLogoutSuccess = createAction('[Courses Page] REQUEST_LOGOUT_SUCCESS');
