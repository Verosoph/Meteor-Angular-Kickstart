import { Component, NgZone, OnInit } from "@angular/core";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { MeteorObservable } from "meteor-rxjs";

import { Room } from "../../../../both/models/room.model";
import { Rooms } from "../../../../both/collections/room.collection";

import template from './room-list.component.html';
import style from './room.scss';

@Component({
    selector: 'roomlist',
    template,
    styles: [style]
})

export class RoomListComponent implements OnInit {

    rooms: Observable<Room[]>;
    roomSub: Subscription;

    constructor(
        private zone: NgZone,
        private router: Router
    ) {}

    ngOnInit() {
        this.roomSub = MeteorObservable.subscribe("rooms").subscribe(() => {
            this.rooms = Rooms.find({}).zone();
        })
    }

    addRoom(): void {
        this.router.navigate(['room/add']);
    }

    editRoom(roomId: string): void {
        this.router.navigate(['room/edit/', roomId]);
    }
}