import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./features/login/login.module').then((m) => m.LoginModule),
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./features/registration/registration.module').then(
                (m) => m.RegistrationModule,
            ),
    },
    {
        path: 'courses/edit/:id',
        loadChildren: () =>
            import('./features/course-form/course-form.module').then(
                (m) => m.CourseFormModule,
            ),
    },
    {
        path: 'courses/add',
        loadChildren: () =>
            import('./features/course-form/course-form.module').then(
                (m) => m.CourseFormModule,
            ),
    },
    {
        path: 'courses/:id',
        loadChildren: () =>
            import('./features/course/course.module').then((m) => m.CourseModule),
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('./features/courses/courses.module').then((m) => m.CoursesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
