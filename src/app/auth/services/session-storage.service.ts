import { Inject, Injectable, InjectionToken } from '@angular/core';

export const SESSION_STORAGE = new InjectionToken<Storage>('Session Storage', {
    providedIn: 'root',
    factory: () => sessionStorage,
});

@Injectable({
    providedIn: 'root',
})
export class SessionStorageService {
    constructor(@Inject(SESSION_STORAGE) private storage: Storage) {}

    public setToken(key: string, token: string): void {
        this.storage.setItem(key, token);
    }

    public getToken(key: string): string | null {
        return this.storage.getItem(key);
    }

    public deleteToken(key: string): void {
        this.storage.removeItem(key);
    }
}
