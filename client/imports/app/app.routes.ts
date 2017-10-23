import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { HomeComponent } from "./home/home.component";
import { BoardComponent } from "./board/board.component";
import { RegisterComponent } from "./register/register.component";
import { RoomListComponent } from "./room/roomlist.component";

export const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'board', component: BoardComponent, canActivate: ['canActivateForLoggedIn']},
    { path: 'rooms', component: RoomListComponent, canActivate: ['canActivateForLoggedIn']}
];

export const ROUTES_PROVIDERS = [{
    provide: 'canActivateForLoggedIn',
    useValue: () => !! Meteor.userId()
}];