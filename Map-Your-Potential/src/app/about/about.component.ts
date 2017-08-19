/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { PositionService } from '../position.service';
//import this here, otherwise will cause " Two different types with this name exist, but they are unrelated."  error
import { Position } from "../position-detail/position";


@Component({
    selector: 'about',
    styleUrls: ['./about.component.scss'],
    templateUrl: './about.component.html',
    providers: [PositionService]
})


export class AboutComponent implements OnInit {


//use the mock data from PositionService
    positions: Position[];
    selectedPosition: Position;
   
/**** DO NOT use NEW with the PositionService *****/

  // will case the error fo No provider for PositionService!
  //need to add providers to the @Component
    constructor(private positionService : PositionService) {
      //constructor should ne contain complex logic, expecially a constructor that  calls a server.
    }
    

    //need to change act on the Promise when it resolves:
    getPositions(): void {
      //this should return an array of positions, but if it complains: " Two different types with this name exist, but they are unrelated." 
      //maybe bcause we import the position in two files, or missing import files from other location
       this.positionService.getPositions().then(positions => this.positions=positions);
       console.log("this all positions is " + this.positions); 
    } 

    //ngOnInt method will call it at the right time  
    ngOnInit(): void {
      this.getPositions();

    }


    onSelect(position: Position): void { this.selectedPosition = position; }
}

