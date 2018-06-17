import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Course } from '../_models';
import { CourseService } from '../_services';

@Component({
    templateUrl: './course.component.html',
    styles: []
})
export class CourseComponent implements OnInit {
    course: Course;

    constructor(
        private route: ActivatedRoute,
        private courseService: CourseService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getCourse();
    }

    getCourse(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.courseService.getCourse(id)
            .subscribe(course => this.course = course);
    }

    goBack(): void {
        this.location.back();
    }
}
