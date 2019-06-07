import { RouterModule, Routes } from "@angular/router";
import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from "./components/list/list.component";
import { CoordsComponent } from './components/coords/coords.component';
import { ConfigComponent } from './components/config/config.component';


const APP_ROUTES: Routes = [
    {path:'login', component:HomeComponent},
    {path:'list', component:ListComponent},
    {path:'coords', component:CoordsComponent},
    {path:'settings', component:ConfigComponent},
    {path: '**', pathMatch: 'full', redirectTo:'login'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);