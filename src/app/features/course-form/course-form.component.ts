import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EMPTY } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { anyWordCharacterValidator } from 'src/app/shared/directives';
import { Course } from 'src/app/shared/models/shared.models';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {
    courseform!: FormGroup;
    newAuthor = new FormControl('', [anyWordCharacterValidator]);
    courseId: string = '';

    constructor(
        private coursesStoreService: CoursesStoreService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.createForm();
        this.route.paramMap
            .pipe(
                switchMap((params: ParamMap) => {
                    return params.has('id')
                        ? this.coursesStoreService.getCourse(params.get('id')!)
                        : EMPTY;
                }),
            )
            .subscribe((course) => {
                this.courseId = course.id;
                this.updateForm(course);
            });
    }

    private updateForm({ title, description, duration, authors }: Course): void {
        this.courseform.patchValue({
            title,
            description,
            duration,
        });

        authors.forEach((author) => this.authors.push(new FormControl(author)));
    }

    onSubmit(): void {
        if (this.courseId) {
            this.coursesStoreService
                .editCourse({ ...this.courseform.value, id: this.courseId })
                .subscribe();
        } else {
            this.coursesStoreService.createCourse(this.courseform.value).subscribe();
        }
    }

    onAddAuthor(): void {
        const author = this.newAuthor.value;
        this.authors.push(new FormControl(author));
        this.newAuthor.reset('');
    }

    onRemoveAuthor(index: number): void {
        this.authors.removeAt(index);
    }

    get title() {
        return this.courseform.get('title');
    }

    get description() {
        return this.courseform.get('description');
    }

    get duration() {
        return this.courseform.get('duration');
    }

    get authors() {
        return this.courseform.get('authors') as FormArray;
    }

    private createForm(): void {
        this.courseform = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            duration: new FormControl('', [Validators.required, Validators.min(0)]),
            authors: new FormArray([]),
        });
    }
}
