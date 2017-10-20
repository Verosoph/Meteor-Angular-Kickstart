import { Component, OnInit } from "@angular/core";

import template from './board.component.html';
import style from './board.scss';

@Component({
    selector: 'board',
    template,
    styles: [style]
})

export class BoardComponent implements OnInit {

    constructor(){}

    ngOnInit() {

    }
}