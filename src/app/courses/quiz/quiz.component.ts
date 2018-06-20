import {Component, OnInit, Input, OnChanges} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['quiz.component.css']

})
export class QuizComponent implements OnInit{
@Input() materialId: number;

test = {questions: [
        {question: "Test", answers: ['Start']},
        {question: "What is not present in a neural network?", answers: ['Input', 'Hidden layers', 'Weights', 'Encoding']},
        {question: "What is not an actual machine learning algorithm?", answers: ['Linear regression', 'Logistic regression', 'Latent regression']},
        {question: "Results", passedTopics: ['Architecture', 'Weights']},
        {question: "2 What is not present in a neural network?", answers: ['Input', 'Hidden layers', 'Weights', 'Encoding']},
        {question: "2 What is not an actual machine learning algorithm?", answers: ['Linear regression', 'Logistic regression', 'Latent regression']},
        {question: "Results", passedTopics: ['Architecture', 'Weights']}
    ]};
currentQuestion = this.test.questions[0];
testIsFinished = false;
counter = 0;

    constructor() {}

    ngOnInit(){
        this.counter = 0;
        this.testIsFinished = false;

        if (this.materialId == 10011){
            this.counter = 0;
        }
        if(this.materialId == 10014){
            this.counter = 3;
        }
    }

    sendAnswer(){
        this.counter = this.counter + 1;

        if (this.counter >= this.test.questions.length){
            this.testIsFinished = true;
        }
        else{
            this.currentQuestion = this.test.questions[this.counter];
        }

    }
}
