/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { QuestionComponent } from './question.component';


describe('QuestionComponent', () => {

    let expectedMsg: string = 'This is the questions for Map Your Potention Application';

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuestionComponent
            ],
            imports: [
                ClarityModule.forRoot()
            ]
        });

        fixture = TestBed.createComponent(QuestionComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });
    //test data????
    it('should create the home page', async(() => {
        expect(compiled).toBeTruthy();
    }));

    it(`should display: "${expectedMsg}"`, async(() => {
        expect(compiled.querySelector("p").textContent).toMatch(expectedMsg);
    }));


});
