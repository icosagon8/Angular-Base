import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userFeatureKey, UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const isAdmin = createSelector(
    selectUserState,
    (state: UserState) => state.isAdmin,
);

export const getName = createSelector(selectUserState, (state: UserState) => state.name);
