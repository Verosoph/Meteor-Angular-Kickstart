import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { AlertService } from '../services/alert.service';

import style from './alert.scss';
import template  from './alert.component.html';


@Component({
    selector: 'alert',
    template,
    styles: [style]
})

export class AlertComponent implements OnInit {

    message: string = "123";
    constructor(private alert: AlertService) {}

    ngOnInit() {
        this.message = "123";
        this.alert.currentMessage.subscribe(message => this.message = message)
    }
}