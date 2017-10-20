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
    ) { }

    ngOnInit() {
        /*
         * Push Items to the Navigation
         */
        this.naviEntries.push({name: 'Home', link: '#'});
        this.naviEntries.push({name: 'test', link: '#'});
        this.naviEntries.push({name: 'test2', link: '#'});
    }

    navigateTo(link: string) {
        this.router.navigate(['/'+link]);
    }
}