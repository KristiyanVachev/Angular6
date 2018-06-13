import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import {CreateCourseComponent} from "./courses/create-course/create-course.component";
import {CoursesComponent} from "./courses/courses.component";
import {CourseComponent} from "./courses/course.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'create-course', component: CreateCourseComponent },
    { path: 'courses', component: CoursesComponent},
    { path: 'course/:id', component: CourseComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);