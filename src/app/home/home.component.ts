import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Course } from '../_models';
import { UserService, CourseService } from '../_services';

@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    courses: Course[] = [];

    constructor(private userService: UserService, private courseService: CourseService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllCourses();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }

    private loadAllCourses() {
        this.courseService.getCourses().pipe(first()).subscribe(courses => {
            this.courses = courses;
        });
    }
}