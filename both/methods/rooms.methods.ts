import { Meteor } from 'meteor/meteor';

import { Room } from '../models/room.model';
import { Rooms } from '../collections/room.collection';

Meteor.methods({

    addRoom: function (roomObj: Room) {
        check(roomObj, Object);

        if(Meteor.isServer) {
            let room = Rooms.collection.findOne({name: roomObj.name});
            if(typeof room === typeof undefined) {
                Rooms.collection.insert(roomObj);
                return true
            }
            else {
                return false
            }
        }
    },

    updateRoom: function (roomObj: Room) {
        check(roomObj, Object);

        if(Meteor.isServer) {
            Rooms.collection.update({_id: roomObj._id}, roomObj);
            return true
        }
    }
})