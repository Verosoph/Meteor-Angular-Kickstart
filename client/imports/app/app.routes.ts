import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";

export const routes: Route[] = [
    { path: '', component: HomeComponent},
    { path: 'register', component: RegisterComponent },
   // { path: 'board', component: BoardComponent, canActivate: ['canActivateForLoggedIn']},
];

export const ROUTES_PROVIDERS = [
    {
        provide: 'canActivateForLoggedIn',
        useValue: () => !! Meteor.userId()
    },
    {
        provide: 'canActivateForAdmin',
        useValue: () => Roles.userIsInRole(Meteor.userId(), 'admin')
    }
];