import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { anyWordCharacterValidator } from 'src/app/shared/directives';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseFormComponent implements OnInit {
    courseform!: FormGroup;
    newAuthor = new FormControl('', [anyWordCharacterValidator]);

    ngOnInit(): void {
        this.createForm();
    }

    onSubmit(): void {
        console.log(this.courseform.value);
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
