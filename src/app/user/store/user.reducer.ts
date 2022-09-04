import { Action, createReducer, on } from '@ngrx/store';

import { UserRoles } from 'src/app/shared/models/shared.models';

import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface UserState {
    isAdmin: boolean;
    name?: string;
}

const initialState: UserState = {
    isAdmin: false,
    name: undefined,
};

export const reducer = createReducer(
    initialState,
    on(UserActions.requestCurrentUser, (state) => ({
        ...state,
    })),
    on(UserActions.requestCurrentUserSuccess, (state, { role, name }) => ({
        isAdmin: role === UserRoles.Admin,
        name,
    })),
    on(UserActions.requestCurrentUserFail, (state) => ({
        ...state,
    })),
);

export const userReducer = (state: UserState, action: Action): UserState =>
    reducer(state, action);
