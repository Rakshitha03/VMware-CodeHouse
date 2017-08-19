import { Injectable } from '@angular/core';

import { Question } from "./question/question";
import { QUESTIONS } from  "./mock-questions";

//tells TypeScript to emit metadata about the service.
@Injectable()


/**** DO NOT use NEW with the PositionService *****/
//the Promise make sure call back when the results are ready. for asynchronous service to do somework and give it a callback function.
export class QuestionService {

	// getQuestions() {
	// 	return QUESTIONS;
	// }

	//getQuestions(): Promise<Question[]> { return Promise.resolve(QUESTIONS); } //get function
	getQuestionsAsyn(): Promise<Question[]> {
		return Promise.resolve(QUESTIONS);
	}

	getPositionWithId(id: number): Promise<Question> {
	    return this.getQuestionsAsyn().then(questions => questions.find(question => question.id === id));
	}

	getQuestions(){
		return QUESTIONS;
	}
	getNumberQuestions(){ 
		return QUESTIONS.length;
	}
}