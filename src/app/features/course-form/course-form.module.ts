import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';

import { CourseFormRoutingModule } from './course-form-routing.module';
import { CourseFormComponent } from './course-form.component';

@NgModule({
    declarations: [CourseFormComponent],
    imports: [SharedModule, CourseFormRoutingModule],
})
export class CourseFormModule {}
