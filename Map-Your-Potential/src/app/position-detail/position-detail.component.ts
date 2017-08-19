/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, OnInit, Inject } from "@angular/core";
//if the file is in current folder/same level: need to have ./in front of the folder name
import { Position } 				from './position';

import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { PositionService } 			from '../position.service';
import { Router }                      from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import {Http} from '@angular/http';

@Component({
    selector: 'position-detail',
    styleUrls: ['./position-detail.component.scss'],
    templateUrl: './position-detail.component.html',
    providers: [ PositionService ]
})

//1. this is the new class of job Position, has property id and name
// because we have a new class here /new component, need to add to app.module, otherwise error
export class PositionDetailComponent implements OnInit {
	//ini class Position 
	//declare that hero is an input property, so data can do two way binding
	//@Input() position : Position;

	position: Position;
	positionId : number;
	overview : boolean = true;
    private annualSalary;
    private hourlySalary;
    private topPayerHourly;
    private topPayerAnnual;
    private educationLevel;
    private salaryComparision;
    private _jsonDataUSMap;
    private _jsonDataTopPayer;
    private _jsonDataEduLevel;
    private _jsonDataSalaryComp;

    constructor( private http:Http, private positionService: PositionService,  private route: ActivatedRoute, private location: Location, private router: Router, @Inject(DOCUMENT) private document: any) { 

        console.log(this.document.location.href);
        let page_id = null;
        route.params.subscribe(translatedValue => {
            page_id = translatedValue.id;
        });
        this.http.get('assets/data/state-salary-map.json')
                .subscribe(res => {
                    const data = res.json();
                    this.jsonDataUSMap = data.data.filter((each_position) => {
                        return (each_position.category === page_id);
                    });
                });
        this.http.get('assets/data/top-payer-states.json')
                .subscribe(res => {
                    const data = res.json();
                    this.jsonDataTopPayer = data.data.filter((each_position) => {
                        return (each_position.category === page_id);
                    });
                });
        this.http.get('assets/data/education-spread.json')
                .subscribe(res => {
                    const data = res.json();
                    this.jsonDataEduLevel = data.data.filter((each_position) => {
                        return (each_position.category === page_id);
                    });
                });
        this.http.get('assets/data/gender-salary.json')
                .subscribe(res => {
                    const data = res.json();
                    this.jsonDataSalaryComp = data.data.filter((each_position) => {
                        return (each_position.category === page_id);
                    });
                });
    }

    get jsonDataSalaryComp() {
        return this._jsonDataSalaryComp;
    }

    set jsonDataSalaryComp(jsonDataSalaryComp) {
        this._jsonDataSalaryComp = jsonDataSalaryComp;
        if (this.jsonDataSalaryComp) {
            const position_statistics = this.jsonDataSalaryComp[0].statistics.data_values;
            this.salaryComparision = this.convertJSONToArray(position_statistics, 'Salary Comparision','lineChart');
        }
    }

    get jsonDataEduLevel() {
        return this._jsonDataEduLevel;
    }

    set jsonDataEduLevel(jsonDataEduLevel) {
        this._jsonDataEduLevel = jsonDataEduLevel;
        if (this.jsonDataEduLevel) {
            const position_statistics = this.jsonDataEduLevel[0].statistics.data_values;
            this.educationLevel = this.convertJSONToArray(position_statistics, 'Highest Education Level','pieChart');
        }
    }

    get jsonDataTopPayer() {
        return this._jsonDataTopPayer;
    }

    set jsonDataTopPayer(jsonDataTopPayer) {
        this._jsonDataTopPayer = jsonDataTopPayer;
        if (this.jsonDataTopPayer) {
            const position_statistics = this.jsonDataTopPayer[0].statistics;
            const salary_hourly = position_statistics[0].data_values;
            const salary_annual = position_statistics[1].data_values;
            this.topPayerHourly = this.convertJSONToArray(salary_hourly, 'Hourly Salary','bar-horizontal');
            this.topPayerAnnual = this.convertJSONToArray(salary_annual, 'Annual Salary','bar-horizontal');
        }
    }

    get jsonDataUSMap() {
        return this._jsonDataUSMap;
    }

    set jsonDataUSMap(jsonDataUSMap) {
        this._jsonDataUSMap = jsonDataUSMap;
        // Handling can be performed here.
        if (this.jsonDataUSMap) {
            const position_statistics = this.jsonDataUSMap[0].statistics;
            const salary_hourly = position_statistics[0].data_values;
            const salary_annual = position_statistics[1].data_values;
            this.hourlySalary = this.convertJSONToArray(salary_hourly, 'Hourly Salary','map');
            this.annualSalary = this.convertJSONToArray(salary_annual, 'Annual Salary','map');
        }
    }

	ngOnInit(): void {
	    this.route.paramMap.switchMap((params: ParamMap) => this.positionService.getPositionWithId(+params.get('id')))
	      .subscribe(position => this.position = position);

	   // this.positionService.getPositionWithId().then(positions => this.position=positions);
	   // console.log("this position is " + this.position); 
	   // console.log("this id is " + this.positionId);

    }

    convertJSONToArray(jsonData: any, title: string, chartType: string): any {
        let array = [];
        if (chartType === 'map' || chartType === 'bar-horizontal') {
            array.push(['States', title]);
        }
        if (chartType === 'pieChart') {
            array.push(['Highest Education Level', '% of total']);
        }
        if (chartType === 'lineChart') {
            array.push(['Hourly Salary', 'Women', 'Men']);
            jsonData.map((eachData) => {
                array.push([eachData.year, eachData.men, eachData.women]);
            });
        } else {
            jsonData.map((eachState) => {
                array.push([eachState.name, eachState.value]);
            });
        }
        
        switch(chartType) {
            case 'map': {
                const chartData = this.displayMap(array);
                return chartData;
            }
            case 'bar-horizontal': {
                const chartData = this.displayBarHorizontal(array);
                return chartData;
            }
            case 'pieChart': {
                const chartData = this.displayPieChart(array);
                return chartData;
            }
            case 'lineChart': {
                const chartData = this.displayLineChart(array);
                return chartData;
            }
        }
        
    }

    displayLineChart(array: any) : any {
        console.log(array);
        let lineChart = {
            chartType: 'LineChart',
            dataTable: array,
            options: {title: 'Hourly Salary Comparision', curveType: 'function', legend: { position: 'bottom' }}
        };
        return lineChart;
    }

    displayPieChart(array: any) : any {
        let pieChartData =  {
            chartType: 'PieChart',
            dataTable: array ,
            options: {'title': 'Highest Education Level', 'is3D': true,'colors':['#003d79', '#006990', '#0497ce', '#89bfdf', '#89CBDF', '#0095D3']},
            };
        return pieChartData;
    }

    displayBarHorizontal(array: any) : any {
        let barChartData = {
            chartType: 'BarChart' ,
            dataTable: array,
                options: {'title': 'Tasks' ,  'colors':['#F38B00'],
                hAxis: {
                        title: 'Top Payer States',
                        minValue: 0,
                        textStyle: {
                            bold: true,
                            fontSize: 12,
                            color: '#4d4d4d'
                        },
                        titleTextStyle: {
                            bold: true,
                            fontSize: 18,
                            color: '#4d4d4d'
                        }
                    },
                    vAxis: {
                        title: 'State',
                        textStyle: {
                            fontSize: 14,
                            bold: true,
                            color: '#848484'
                        },
                        titleTextStyle: {
                            fontSize: 14,
                            bold: true,
                            color: '#848484'
                        }
                    }
                    },
            };
        return barChartData;
    }
        
    displayMap(array: any) : any {
        let chart =  {
            chartType: 'GeoChart',
            dataTable:array,
            options: {'title': 'Tasks',region: "US", resolution: "provinces"},
        };
        return chart;
    }

	goBack(): void {
	    this.location.back();
	}

	searchSite() : void {
        window.open('https://www.indeed.com/search?q='+this.position.name);
    }

	
}


 

