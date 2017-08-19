import { Question } from "./question/question";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const QUESTIONS : Question[] = [

	{ 
		id: 11, 
		question: "Would you like to analyze data using statistics?", 
		answer : [{ key: "A" , value: "That's my jam" }, { key: "B" , value: "I like it somewhat I guess..." }, { key: "C" , value: "Nope. Too boring for me right now." }, { key: "D" , value: "I would rather never do this." }] },
    { 	id: 12, 
    	question: "Would you like to grade the quality of code?", 
    	answer : [{ key: "A" , value: "Yes" }, { key: "B" , value: "I like it somewhat I guess..." }, { key: "C" , value: "Nope. Too boring for me right now." }, { key: "D" , value: "I would rather never do this." }] },
    { 	id: 13, 
    	question: "Do you enjoy calculating risk based on a variety of factors?", 
    	answer : [{ key: "A" , value: "Sure, why not" }, { key: "B" , value: "I like it somewhat I guess..." }, { key: "C" , value: "Nope. Too boring for me right now." }, { key: "D" , value: "I would rather never do this." }] },
    { 	id: 14, 
    	question: "Would you like to research how genes function?", 
    	answer : [{ key: "A" , value: "That's my calling." }, { key: "B" , value: "Well..Maybe?" }, { key: "C" , value: "You're kidding right?" }, { key: "D" , value: "I would rather never do this." }] },
    { 	id: 15, 
    	question: "Have you ever wanted to start your own company?", 
    	answer : [{ key: "A" , value: "YES! That's more like it" }, { key: "B" , value: "I like it somewhat I guess..." }, { key: "C" , value: "Nope. Too boring for me right now." }, { key: "D" , value: "No, thanks." } ] },
    { 	id: 16, 
    	question: "Are you an assembling electronics parts person or a software tool building person?", 
    	answer : [{ key: "A" , value: "Assembling parts" }, { key: "B" , value: "Software, ofcourse!" }, { key: "C" , value: "A bit of both" }, { key: "D" , value: "Neither. My creativity is lost here!" }] },
	{ 	id: 17, 
		question: "Would you enjoy advising organizations on how to meet their business goals", 
		answer : [{ key: "A" , value: "Of course! I love it" }, { key: "B" , value: "Maybe sometimes I guess..." }, { key: "C" , value: "Nope. Too boring for me right now." }, { key: "D" , value: "I would rather never do this." }]},
	{ 	id: 18, 
		question: "Would you enjoy balancing the budget of a company?", 
		answer : [{ key: "A" , value: "Of course! I love it" },{ key: "B" , value: "I like it somewhat I guess..." }, { key: "C" , value: "Nope. Too boring for me right now." }, { key: "D" , value: "I would rather never do this." }] },
]; 