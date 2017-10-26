import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Room } from '../models/room.model';

export const Rooms = new MongoObservable.Collection<Room>('rooms');

if(Meteor.isClient) {
    Meteor.subscribe("room");
}