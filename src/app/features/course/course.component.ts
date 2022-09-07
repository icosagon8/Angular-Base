import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { EMPTY, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { Course } from 'src/app/shared/models/shared.models';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
    public course$!: Observable<Course>;

    constructor(
        private coursesStoreService: CoursesStoreService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.course$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => {
                return params.has('id')
                    ? this.coursesStoreService.getCourse(params.get('id')!)
                    : EMPTY;
            }),
        );
    }
}
