import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MeteorObservable } from "meteor-rxjs";

import style from './navi.scss';
import template  from './navi.component.html';
import { NaviEntry } from '../../../../both/models/navi.model';

@Component({
    selector: 'navi',
    template,
    styles: [style]
})

export class NaviComponent implements OnInit {

    naviEntries: NaviEntry[];
    loggedIn:boolean = false;

    constructor(
        private router: Router
    ) {}

    ngOnInit() {
        /*
         * Push Items to the Navigation
         */
        MeteorObservable.autorun().subscribe(() => {
            this.loggedIn = !!Meteor.userId();

            this.naviEntries = [];
            this.naviEntries.push({name: 'Home', link: ''});

            if(Meteor.userId()) {
                this.naviEntries.push({name: 'Board', link: 'board'});
                this.naviEntries.push({name: 'Rooms', link: 'rooms'});
            }
        });
    }

    navigateTo(link: string) {
        this.router.navigate(['/'+link]);
    }
}