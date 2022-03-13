import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CourseCardComponent, CourseListComponent } from './components';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
    imports: [SharedModule],
    exports: [CoursesComponent],
})
export class CoursesModule {}
