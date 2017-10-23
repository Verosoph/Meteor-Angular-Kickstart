import { Component, OnInit } from "@angular/core";

import template from "./loggedin.component.html";
import style from "./login.scss";


@Component({
    selector: 'loggedin',
    template,
    styles: [style]
})

export class LoggedinComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    logout() {
        Meteor.logout();
    }

}