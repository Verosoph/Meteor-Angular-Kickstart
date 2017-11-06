import { Component, NgZone, OnInit } from "@angular/core";
import { Meteor } from 'meteor/meteor';

import { User } from '../../../../both/models/user.model';

import template from './board.component.html';
import style from './board.scss';

@Component({
    selector: 'board',
    template,
    styles: [style]
})

export class BoardComponent implements OnInit {

    userId: string;
    loadUser: boolean;
    hasRoom: boolean;
    user: User;

    constructor(
        private zone: NgZone
    ){}

    ngOnInit() {

        this.userId = Meteor.userId();

        if(this.userId) {

            Tracker.autorun(() => {
                this.zone.run(() =>{

                    this.loadUser = false;
                    this.hasRoom = false;

                    this.user = Meteor.users.findOne(this.userId);
                    if(typeof this.user !== typeof undefined) {

                        this.loadUser = true;

                        if(this.user.room){
                            this.hasRoom = true;
                        }
                    }

                })
            });
        }


    }
}