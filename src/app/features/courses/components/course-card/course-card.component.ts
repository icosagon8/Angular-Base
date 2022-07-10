import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Course } from 'src/app/shared/models/shared.models';

@Component({
    selector: 'app-course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
    @Input() course!: Course;
}
