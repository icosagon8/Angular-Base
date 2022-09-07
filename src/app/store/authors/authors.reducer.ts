import { Action, createReducer, on } from '@ngrx/store';

import { Author } from 'src/app/shared/models/shared.models';

import * as AuthorsActions from './authors.actions';

export const authorsFeatureKey = 'authors';

export interface AuthorsState {
    authors: Author[];
    addedAuthor: Author | null;
}

const initialState: AuthorsState = {
    authors: [],
    addedAuthor: null,
};

export const reducer = createReducer(
    initialState,
    on(AuthorsActions.requestAuthors, (state) => ({
        ...state,
    })),
    on(AuthorsActions.requestAuthorsSuccess, (state, { authors }) => ({
        ...state,
        authors,
    })),
    on(AuthorsActions.requestAuthorsFail, (state) => ({
        ...state,
    })),
    on(AuthorsActions.requestAddAuthor, (state) => ({
        ...state,
    })),
    on(AuthorsActions.requestAddAuthorSuccess, (state, { author }) => ({
        ...state,
        authors: [...state.authors],
        addedAuthor: author,
    })),
    on(AuthorsActions.requestAddAuthorFail, (state) => ({
        ...state,
    })),
    on(AuthorsActions.resetAddedAuthor, (state) => ({
        ...state,
        addedAuthor: null,
    })),
);

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState =>
    reducer(state, action);
