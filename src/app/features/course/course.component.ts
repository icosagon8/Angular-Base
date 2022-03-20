import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent {}
