//need to import app compoent 
//component is a directive with a view

import { Component } from '@angular/core';
import { Router } from '@angular/router';

//component must provide following fields
@Component({
    selector: 'my-app',	//is loaded in index.html , standard form using dash
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

//name of the class
export class AppComponent {

    constructor(private router: Router) {

    }

    title = 'Map Your Potential';
    //position = 'none';

    

}
