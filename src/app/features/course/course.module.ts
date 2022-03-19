import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CourseFormComponent } from './components';
import { CourseComponent } from './course.component';

@NgModule({
    declarations: [CourseComponent, CourseFormComponent],
    imports: [SharedModule],
    exports: [CourseComponent],
})
export class CourseModule {}
