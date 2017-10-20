import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { HomeComponent } from "./home/home.component";
import { BoardComponent } from "./board/board.component";

export const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'board', component: BoardComponent, canActivate: ['canActivateForLoggedIn']},
    { path: 'board2', component: BoardComponent}
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];