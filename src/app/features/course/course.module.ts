import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';

@NgModule({
    declarations: [CourseComponent],
    imports: [SharedModule, CourseRoutingModule],
})
export class CourseModule {}
