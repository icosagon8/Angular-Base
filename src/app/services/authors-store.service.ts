import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Author } from 'src/app/shared/models/shared.models';

import { AuthorsService } from './authors.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorsStoreService {
    private readonly isLoading$$ = new BehaviorSubject<boolean>(false);
    public readonly isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

    private readonly authors$$ = new BehaviorSubject<Author[]>([]);
    public readonly authors$: Observable<Author[]> = this.authors$$.asObservable();

    constructor(private authorsService: AuthorsService) {
        this.getAll();
    }

    public addAuthor(author: Author): Observable<Author> {
        return this.authorsService
            .addAuthor(author)
            .pipe(
                tap((authorFromApi) =>
                    this.setAuthorsToState([...this.authors, authorFromApi]),
                ),
            );
    }

    private get authors(): Author[] {
        return this.authors$$.getValue();
    }

    private getAll(): void {
        this.setIsLoading(true);

        this.authorsService
            .getAll()
            .pipe(
                finalize(() => {
                    this.setIsLoading(false);
                }),
            )
            .subscribe((authors) => {
                this.setAuthorsToState(authors);
            });
    }

    private setIsLoading(isLoading: boolean): void {
        this.isLoading$$.next(isLoading);
    }

    private setAuthorsToState(authors: Author[]): void {
        this.authors$$.next(authors);
    }
}
