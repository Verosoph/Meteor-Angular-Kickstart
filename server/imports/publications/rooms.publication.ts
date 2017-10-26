import { Meteor } from 'meteor/meteor';

import { Rooms } from '../../../both/collections/room.collection';

interface Options {
    [key: string]: any;
}

Meteor.publish('rooms', () => Rooms.find({}));

Meteor.publish('room', (roomId: string) => {
    return Rooms.collection.findOne({_id: roomId});
});