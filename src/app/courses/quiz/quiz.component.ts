import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['quiz.component.css']

})
export class QuizComponent implements OnInit{
test = {questions: [
        {question: "What is not present in a neural network?", answers: ['Input', 'Hidden layers', 'Weights', 'Encoding']},
        {question: "What is not an actual machine learning algorithm?", answers: ['Linear regression', 'Logistic regression', 'Latent regression']},
        {question: "Results", passedTopics: ['Architecture', 'Weights']}
    ]};
currentQuestion = this.test.questions[0];
testIsFinished = false;
counter = 0;

    constructor() {}

    ngOnInit(){
        this.counter = 0;
        this.testIsFinished = false;
    }

    sendAnswer(){
        this.counter = this.counter + 1;

        console.log(this.test.questions.length, this.counter, this.testIsFinished   );
        if (this.counter >= this.test.questions.length){
            this.testIsFinished = true;
        }
        else{
            this.currentQuestion = this.test.questions[this.counter];
        }

    }
}
