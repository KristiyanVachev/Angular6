import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Course } from '../_models';
import { CourseService } from '../_services';

@Component({templateUrl: 'courses.component.html'})
export class CoursesComponent implements OnInit {
    courses: Course[] = [];

    constructor( private courseService: CourseService) {}

    ngOnInit() {
        this.loadAllCourses();
    }

    private loadAllCourses() {
        this.courseService.getCourses().pipe(first()).subscribe(courses => {
            this.courses = courses;
        });
    }
}