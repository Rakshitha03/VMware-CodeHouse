/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
 
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PositionDetailComponent } from './position-detail/position-detail.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'}, //default rount when visit the url
    {path: 'home', component: HomeComponent},			// 'home' page is using the HomeComponent
    {path: 'about', component: AboutComponent}, 			// 'about' page is using the AboutComponent
    {path: 'position-detail', component: PositionDetailComponent},
    {path: 'detail/:id', component: PositionDetailComponent}

];


export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);	//???
