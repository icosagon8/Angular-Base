import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorizedGuard implements CanLoad {
    constructor(private authService: AuthService, private router: Router) {}

    canLoad(): Observable<boolean | UrlTree> {
        return this.authService.isAuthorized$.pipe(
            map((isAuthorized) => isAuthorized || this.router.createUrlTree(['/login'])),
        );
    }
}
