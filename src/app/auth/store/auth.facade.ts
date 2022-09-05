import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { User } from 'src/app/shared/models/shared.models';

import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.reducer';
import { getSpecificErrorMessage, getToken, isUserAuthorized } from './auth.selectors';

@Injectable()
export class AuthStateFacade {
    isAuthorized$ = this.store.pipe(select(isUserAuthorized));
    getToken$ = this.store.pipe(select(getToken));
    getSpecificErrorMessage$ = this.store.pipe(select(getSpecificErrorMessage));

    constructor(private store: Store<AuthState>, private authService: AuthService) {}

    login(body: User): void {
        this.store.dispatch(
            AuthActions.requestLogin({ email: body.email, password: body.password }),
        );
    }

    register(body: User): void {
        this.store.dispatch(AuthActions.requestRegister(body));
    }

    logout(): void {
        this.store.dispatch(AuthActions.requestLogout());
    }

    closeSession(): void {
        this.store.dispatch(AuthActions.requestLogoutSuccess());
    }

    setAuthorization(): void {
        this.store.dispatch(
            AuthActions.requestLoginSuccess({
                token: this.authService.getToken(),
                isAuthorized: true,
            }),
        );
    }
}
