import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CourseCardComponent, CourseListComponent } from './components';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
    declarations: [CoursesComponent, CourseCardComponent, CourseListComponent],
    imports: [SharedModule, CoursesRoutingModule],
})
export class CoursesModule {}
