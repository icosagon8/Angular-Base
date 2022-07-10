import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Author, Course } from 'src/app/shared/models/shared.models';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent implements OnInit {
    showModal: boolean = false;
    courses!: Observable<Course[]>;

    private authors: Author[] = [];

    constructor(
        public userStoreService: UserStoreService,
        public coursesStoreService: CoursesStoreService,
        private authService: AuthService,
        private authorsStoreService: AuthorsStoreService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.authorsStoreService.authors$.subscribe(
            (authors) => (this.authors = authors),
        );
        this.courses = this.coursesStoreService.courses$.pipe(
            map((courses) => {
                return courses.map((course) => {
                    const authors = this.authors
                        .filter((author) => course.authors.includes(author.id))
                        .map((author) => author.name);

                    return { ...course, authors };
                });
            }),
        );
    }

    openModal(): void {
        this.showModal = true;
    }

    onClose(): void {
        this.showModal = false;
    }

    onConfirm(): void {
        this.showModal = false;
        this.authService.logout();
    }

    onSearch(query: string): void {
        this.coursesStoreService.setSearchQuery(query);
    }

    onRemoveCourse(id: Course['id']): void {
        this.coursesStoreService.deleteCourse(id);
    }

    onEditCourse(id: Course['id']): void {
        this.router.navigate(['/courses/edit', id]);
    }

    onShowCourse(id: Course['id']): void {
        this.router.navigate(['/courses/', id]);
    }
}
