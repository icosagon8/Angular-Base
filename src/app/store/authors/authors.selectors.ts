import { createFeatureSelector, createSelector } from '@ngrx/store';

import { authorsFeatureKey, AuthorsState } from './authors.reducer';

export const selectAuthorsState = createFeatureSelector<AuthorsState>(authorsFeatureKey);

export const getAddedAuthors = createSelector(
    selectAuthorsState,
    (state: AuthorsState) => state.addedAuthor,
);

export const getAuthors = createSelector(
    selectAuthorsState,
    (state: AuthorsState) => state.authors,
);
