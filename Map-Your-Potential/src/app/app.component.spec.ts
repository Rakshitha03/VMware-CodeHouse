/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PositionDetailComponent } from "./position-detail/position-detail.component";
import { QuestionComponent } from "./question/question.component";
import { ClarityModule } from "clarity-angular";
import { ROUTING } from "./app.routing";
import { APP_BASE_HREF } from "@angular/common";
import { BarchartComponent } from './shared/barchart/barchart.component';

describe('AppComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AboutComponent,
                HomeComponent,
                PositionDetailComponent,
                QuestionComponent, 
                
            ],
            imports: [
                ClarityModule.forRoot(),
                ROUTING
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        });

        fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;


    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the app', async(() => {
        expect(compiled).toBeTruthy();
    }));


});