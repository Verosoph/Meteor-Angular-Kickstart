import { Component, NgZone, OnInit } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from "meteor-rxjs";

import { User } from '../../../../both/models/user.model';
import { Room } from "../../../../both/models/room.model";
import { Rooms } from "../../../../both/collections/room.collection";

import style from './home.scss';
import template  from './home.component.html';

@Component({
    selector: 'home',
    template,
    styles: [style]
})

export class HomeComponent implements OnInit {

    loadUser: boolean;
    hasRoom: boolean;
    loggedIn: boolean;

    userSub: Subscription;
    roomSub: Subscription;
    userId: string;
    user: User;
    room: Room;

    constructor(
        private zone: NgZone
    ) {}

    ngOnInit() {

        this.loggedIn = false;
        this.userId = Meteor.userId();

        if(this.userId) {
            this.loggedIn = true;

            this.userSub = MeteorObservable.subscribe("userdata", this.userId).subscribe(() => {
                Tracker.autorun(() => {
                    this.zone.run(() => {

                        this.loadUser = false;
                        this.hasRoom = false;

                        this.user = Meteor.users.findOne(this.userId);
                        if (typeof this.user !== typeof undefined) {

                            if (this.user.room) {
                                this.roomSub = MeteorObservable.subscribe("rooms").subscribe(() => {
                                    Tracker.autorun(() => {
                                        this.zone.run(() => {
                                            this.room = Rooms.findOne({_id: this.user.room.roomId});

                                            if(typeof this.room !== typeof undefined) {
                                                this.hasRoom = true;
                                            }
                                        });
                                    });
                                });
                            }
                        }
                    });
                });
            });
        }

    }
}