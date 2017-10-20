import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import style from './navi.scss';
import template  from './navi.component.html';
import { NaviEntry } from '../../../../both/models/navi.model';

@Component({
    selector: 'navi',
    template,
    styles: [style]
})

export class NaviComponent implements OnInit {

    naviEntries: NaviEntry[] = [];

    constructor(
        private router: Router
    ) {}

    ngOnInit() {
        /*
         * Push Items to the Navigation
         */
        this.naviEntries.push({name: 'Home', link: ''});
        if(Meteor.userId()) this.naviEntries.push({name: 'Board', link: 'board'});
    }

    navigateTo(link: string) {
        this.router.navigate(['/'+link]);
    }
}