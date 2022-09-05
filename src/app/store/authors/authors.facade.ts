import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Author } from 'src/app/shared/models/shared.models';

import * as AuthorsActions from './authors.actions';
import { AuthorsState } from './authors.reducer';
import { getAddedAuthors, getAuthors } from './authors.selectors';

@Injectable()
export class AuthorsStateFacade {
    addedAuthor$ = this.store.pipe(select(getAddedAuthors));
    authors$ = this.store.pipe(select(getAuthors));

    constructor(private store: Store<AuthorsState>) {}

    getAuthors(): void {
        this.store.dispatch(AuthorsActions.requestAuthors());
    }

    addAuthor(author: Author): void {
        this.store.dispatch(
            AuthorsActions.requestAddAuthor({
                author,
            }),
        );
    }
}
