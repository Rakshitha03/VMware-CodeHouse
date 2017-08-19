import { Injectable } from '@angular/core';

import { Position } from "./position-detail/position";
import { POSITIONS } from  "./mock-positions";

//tells TypeScript to emit metadata about the service.
@Injectable()


/**** DO NOT use NEW with the PositionService *****/
//the Promise make sure call back when the results are ready. for asynchronous service to do somework and give it a callback function.
export class PositionService {

	getPositions(): Promise<Position[]> {
		return Promise.resolve(POSITIONS);
	} //get function

//may need to change this function
	getPosition() {
		return POSITIONS;
	}

	getHeroesSlowly(): Promise<Position[]> {
	    return new Promise(resolve => {
	      // Simulate server latency with 2 second delay
	      setTimeout(() => resolve(this.getPositions()), 2000);
	    });
	}

	getPositionWithId(id: number): Promise<Position> {
	    return this.getPositions().then(positions => positions.find(position => position.id === id));
	}
}