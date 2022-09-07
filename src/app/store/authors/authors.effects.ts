import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthorsService } from 'src/app/services/authors.service';

import * as AuthorsActions from './authors.actions';

@Injectable()
export class AuthorsEffects {
    getAuthors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthorsActions.requestAuthors),
            switchMap(() =>
                this.authorsService.getAll().pipe(
                    map((authors) => AuthorsActions.requestAuthorsSuccess({ authors })),
                    catchError(() => of(AuthorsActions.requestAuthorsFail())),
                ),
            ),
        ),
    );

    addAuthor$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthorsActions.requestAddAuthor),
            switchMap(({ author }) =>
                this.authorsService.addAuthor(author).pipe(
                    map((author) => AuthorsActions.requestAddAuthorSuccess({ author })),
                    catchError(() => of(AuthorsActions.requestAddAuthorFail())),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private authorsService: AuthorsService) {}
}
