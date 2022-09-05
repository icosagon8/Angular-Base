import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
    isAuthorized: boolean;
    token: string | null;
    errorMessage: string;
}

const initialState: AuthState = {
    isAuthorized: false,
    token: null,
    errorMessage: '',
};

export const reducer = createReducer(
    initialState,
    on(AuthActions.requestLogin, (state) => ({
        ...state,
    })),
    on(AuthActions.requestLoginSuccess, (state, { token, isAuthorized }) => ({
        ...state,
        token,
        isAuthorized,
    })),
    on(AuthActions.requestLoginFail, (state, { errorMessage }) => ({
        ...state,
        errorMessage,
    })),
    on(AuthActions.requestRegister, (state) => ({
        ...state,
    })),
    on(AuthActions.requestRegisterSuccess, (state, {}) => ({
        ...state,
    })),
    on(AuthActions.requestRegisterFail, (state, { errorMessage }) => ({
        ...state,
        errorMessage,
    })),
    on(AuthActions.requestLogout, (state) => ({
        ...state,
    })),
    on(AuthActions.requestLogoutSuccess, (state) => ({
        ...state,
    })),
);

export const authReducer = (state: AuthState, action: Action): AuthState =>
    reducer(state, action);
