import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CourseModel } from '../../models/course.model';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
    @Input() courses: CourseModel[] = [];
    @Input() editable: boolean = false;

    @Output() showCourse = new EventEmitter<CourseModel['id']>();
    @Output() editCourse = new EventEmitter<CourseModel['id']>();
    @Output() removeCourse = new EventEmitter<CourseModel['id']>();

    onShowCourse(id: CourseModel['id']): void {
        this.showCourse.emit(id);
    }

    onEditCourse(id: CourseModel['id']): void {
        this.editCourse.emit(id);
    }

    onRemoveCourse(id: CourseModel['id']): void {
        this.removeCourse.emit(id);
    }
}
