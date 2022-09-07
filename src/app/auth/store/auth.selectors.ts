import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authFeatureKey, AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isUserAuthorized = createSelector(
    selectAuthState,
    (state: AuthState) => state.isAuthorized,
);

export const getToken = createSelector(
    selectAuthState,
    (state: AuthState) => state.token,
);

export const getSpecificErrorMessage = createSelector(
    selectAuthState,
    (state: AuthState) => state.errorMessage,
);
