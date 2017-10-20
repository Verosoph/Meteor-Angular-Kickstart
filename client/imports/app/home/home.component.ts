import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import style from './home.scss';
import template  from './home.component.html';

@Component({
    selector: 'home',
    template,
    styles: [style]
})

export class HomeComponent implements OnInit {

    constructor() {}

    ngOnInit() {}
}