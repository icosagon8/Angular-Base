import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from 'src/app/shared/models/shared.models';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
    @Input() courses: Course[] = [];
    @Input() editable: boolean = false;

    @Output() showCourse = new EventEmitter<Course['id']>();
    @Output() editCourse = new EventEmitter<Course['id']>();
    @Output() removeCourse = new EventEmitter<Course['id']>();

    onShowCourse(id: Course['id']): void {
        this.showCourse.emit(id);
    }

    onEditCourse(id: Course['id']): void {
        this.editCourse.emit(id);
    }

    onRemoveCourse(id: Course['id']): void {
        this.removeCourse.emit(id);
    }

    trackByFn(index: number, item: Course): string {
        return item.id;
    }
}
