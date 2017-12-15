import { Component, NgZone, OnInit, Output, EventEmitter } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from "meteor-rxjs";

import { User } from '../../../../both/models/user.model';
import style from './home.scss';
import template  from './home.component.html';

import { AlertService } from '../services/alert.service';
import { AlertModel } from "../../../../both/models/service.model";

@Component({
    selector: 'home',
    template,
    styles: [style]
})

export class HomeComponent implements OnInit {

    loadUser: boolean;
    loggedIn: boolean;

    userSub: Subscription;

    userId: string;
    user: User;
    usernames: Object;

    alertObj: AlertModel;


    constructor(
        private zone: NgZone,
        private alert: AlertService
    ) {}

    ngOnInit() {
        MeteorObservable.autorun().subscribe(() => {
            this.loggedIn = false;
            this.userId = Meteor.userId();

            if (this.userId) {
                this.loggedIn = true;

                this.userSub = MeteorObservable.subscribe("userdata", this.userId).subscribe(() => {
                    Tracker.autorun(() => {
                        this.zone.run(() => {

                            this.loadUser = false;
                            this.usernames = {};

                            this.user = Meteor.users.findOne(this.userId);
                            if (typeof this.user !== typeof undefined) {

                            }
                        });
                    });
                });
            }
        });
    }

}