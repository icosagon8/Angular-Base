import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedGuard } from './auth/guards/authorized.guard';
import { NotAuthorizedGuard } from './auth/guards/not-authorized.guard';
import { AdminGuard } from './user/guards/admin.guard';

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
        canActivate: [NotAuthorizedGuard],
    },
    {
        path: 'registration',
        loadChildren: () =>
            import('./features/registration/registration.module').then(
                (m) => m.RegistrationModule,
            ),
        canActivate: [NotAuthorizedGuard],
    },
    {
        path: 'courses/edit/:id',
        loadChildren: () =>
            import('./features/course-form/course-form.module').then(
                (m) => m.CourseFormModule,
            ),
        canLoad: [AuthorizedGuard],
        canActivate: [AdminGuard],
    },
    {
        path: 'courses/add',
        loadChildren: () =>
            import('./features/course-form/course-form.module').then(
                (m) => m.CourseFormModule,
            ),
        canLoad: [AuthorizedGuard],
        canActivate: [AdminGuard],
    },
    {
        path: 'courses/:id',
        loadChildren: () =>
            import('./features/course/course.module').then((m) => m.CourseModule),
        canLoad: [AuthorizedGuard],
    },
    {
        path: 'courses',
        loadChildren: () =>
            import('./features/courses/courses.module').then((m) => m.CoursesModule),
        canLoad: [AuthorizedGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
