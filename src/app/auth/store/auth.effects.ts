import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.requestLogin),
            switchMap((user) =>
                this.authService.login(user).pipe(
                    map((token) =>
                        AuthActions.requestLoginSuccess({ token, isAuthorized: true }),
                    ),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            AuthActions.requestLoginFail({
                                errorMessage: error.message,
                            }),
                        ),
                    ),
                ),
            ),
        ),
    );

    constructor(private actions$: Actions, private authService: AuthService) {}
}
