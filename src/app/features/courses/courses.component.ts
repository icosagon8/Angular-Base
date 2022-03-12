import { ChangeDetectionStrategy, Component } from '@angular/core';

import { COURSES } from 'src/app/features/courses/mocks/courses.mock';

import { CourseModel } from './models/course.model';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
    courses: CourseModel[] = COURSES;
}
