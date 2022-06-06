import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { UserRoles } from 'src/app/shared/models/shared.models';

import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class UserStoreService {
    private readonly name$$ = new BehaviorSubject<string>('');
    public readonly name$: Observable<string> = this.name$$.asObservable();

    private readonly isAdmin$$ = new BehaviorSubject<boolean>(false);
    public readonly isAdmin$: Observable<boolean> = this.isAdmin$$.asObservable();

    constructor(private userService: UserService) {}

    public getUser(): void {
        this.userService.getUser().subscribe((user) => {
            this.name$$.next(user.name);
            this.isAdmin$$.next(user.role === UserRoles.admin);
        });
    }
}
