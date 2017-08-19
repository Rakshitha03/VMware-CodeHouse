/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

//if the file is in current folder/same level: need to have ./in front of the folder name
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Position }                    from '../position-detail/position';
import { PositionService }             from '../position.service';
import { Question }                    from "./question";
import { QuestionService }             from '../question.service';
import { Component, Input, OnInit }    from "@angular/core";
import { Router }                      from '@angular/router';


@Component({
    selector: 'question',
    styleUrls: ['./question.component.scss'],
    templateUrl: './question.component.html',
    providers: [QuestionService, PositionService, ]
})


//1. this is the new class of job Position, has property id and name
// because we have a new class here /new component, need to add to app.module, otherwise error
export class QuestionComponent implements OnInit {

    questions : Question[];    //array
    selectedQuestion: Question;    //single
    selections : any[];  //passing answer to the array here, and display in the modal window
    numofQuestions : any;
    questionCount = 0;
    showResult : boolean = true;
    progressVal;
    firstClick : boolean = false;
    currentQue : number = 12;
    loading : boolean = false;
    emailSent : boolean = false;

    //or recommand position
    ///recommendPosition : Position;
    scores : number[];
    //contain nth matched positions
    matches : Position[];

    submitted = false;
    assessmentForm = new FormGroup({
        answer: new FormControl('')
    });

    /*
    Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the constructor. The constructor should only be used to initialize class members but shouldn't do actual "work".
    So you should use constructor() to setup Dependency Injection and not much else. ngOnInit() is better place to "start" - it's where/when components' bindings are resolved.
    */
    constructor( private router: Router, private fb: FormBuilder,
        private questionService : QuestionService, private positionService : PositionService) {
        this.scores = Array(25).fill(0);
        this.matches = Array(3).fill(0);
    }


    getQuestions(): void {
      //this should return an array of positions, but if it complains: " Two different types with this name exist, but they are unrelated." 
      //maybe bcause we import the position in two files, or missing import files from other location

      // this.questionService.getQuestions().then(questions => this.questions=questions);

      /*** this is the first question: id is 11 ***/
       this.assessmentForm.reset();
       this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == 11);
       this.numofQuestions = this.questionService.getNumberQuestions();
       this.selections = this.selectedQuestion.answer;
       this.currentQue = 12;
    } 


    //if implements OnInit, must have the following ngOnInit function
    //must need it otherwise the data does not show in modal window!
    //TODO: when close the modal window, need to restart the questions!
    //    need to use a form group.... and this.modalForm.reset()

    ngOnInit(): void { 
       // this.assessmentForm.reset();
        this.getQuestions();
    }

    topThreePosition(): void {
        // for (let i in this.scores) {
        //    //console.log(i); // "0", "1", "2",
        //    var max = 0;
        //    var y = +i;
        //    //console.log(this.scores[i]);
        //    if(this.scores[i] > max) {
        //       this.matches[2] = this.matches[1];
        //       this.matches[1] = this.matches[0];
        //       this.matches[0] = this.positionService.getPosition().find(x => x.id == y);
        //       console.log(this.scores[i]);
        //    }
        //}
           this.matches[0] = this.positionService.getPosition().find(x => x.id == 11);
           this.matches[1] = this.positionService.getPosition().find(x => x.id == 13);
           this.matches[2] = this.positionService.getPosition().find(x => x.id == 14);
      

    }

    onSubmit(id: any, answer : string): void {
        console.log("in question submit id is " + id + " answer is " + answer); 
        this.loading = true;
        setTimeout(() => {
             if(id == 18) {
             //record score from answer 
                 switch (answer) 
                { 
                    case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                                break; 
                    case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                                break; 
                    case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                                break; 
                    case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                                break; 
                } 
            }
           this.assessmentForm.reset();
           this.topThreePosition();
           this.assessmentForm.reset();
           this.firstClick = false;
           this.loading= false;
        }, 2000);
    }

    onOpen(open: Boolean): void {
        this.clearData();
        this.open = open;
        //if(!this.submitted)

        this.assessmentForm.reset(); 
        this.submitted = false;
    }

    open: Boolean = false;

    onNext(id: any, answer : string): void {

        
        if(id == 11) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }        
        else if(id == 12) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }
        if(id == 13) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }else if(id == 14) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }
        else if(id == 15) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }
        else if(id == 16) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }
        else if(id == 17) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }
        else if(id == 18) {
            this.selectedQuestion = this.questionService.getQuestions().find(x => x.id == this.currentQue);
             //record score from answer 
             switch (answer) 
            { 
                case "A":   this.scores[11] += 2; this.scores[16] += 1; this.scores[13] += 1; 
                            break; 
                case "B":   this.scores[14] += 2; this.scores[12] += 1; this.scores[13] += 1;
                            break; 
                case "C":   this.scores[18] += 2; this.scores[17] += 1; this.scores[15] += 1;
                            break; 
                case "D":   this.scores[17] += 2; this.scores[16] += 1; this.scores[15] += 1;
                            break; 
            } 
        }
        this.currentQue++;
        this.selections = this.selectedQuestion.answer;
        this.assessmentForm.reset();
        this.firstClick = false;

    }

    increaseProgressBar() {
        if(!this.firstClick) {
            this.questionCount += 1;
            this.progressVal = (this.questionCount/this.numofQuestions)*100; 
            this.firstClick = true;
        }
        console.log("this selection key is " + this.selections[0].key + "this selection value is " + this.selections[1].key );  
        console.log("other " + this.selections[0] );  
    }


    learnMore(pos : Position):void {
        // this.questionCount = 0;
        // this.progressVal = 0;
       
        //this.router.navigate(['/detail', pos.id]);
        var url = "detail/" + pos.id;
       // window.location.href=url;
        window.open(url, '_blank'); 
        //this.submitted = false;
        //this.getQuestions();
        this.assessmentForm.reset();
    }

    clearData(): void {
              //clear data:

        this.questionCount = 0;
        this.progressVal = 0;
        this.submitted = false;
        this.showResult = true;
        this.firstClick = false;
        this.loading = false;
        this.emailSent = false;
       
        this.getQuestions();
        this.assessmentForm.reset();
    }

    // size() : string {
    //     var t = "'lg'";

    //     return t;
    // }

    sendEmail() : void {
        this.emailSent = true;
    }
}


